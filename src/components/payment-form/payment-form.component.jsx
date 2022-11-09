import './payment-form.styles.scss';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Button, { BUTTON_STYLE_CLASSES } from '../button/button.component';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartTotal } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import { useState } from 'react';
import { setCartItems } from '../../store/cart/cart.action';
import { useNavigate } from 'react-router-dom';

const PaymentForm = () => {
	const stripe = useStripe();
	const elements = useElements();
	const dispatch = useDispatch();
	const cartTotal = useSelector(selectCartTotal);
	const currentUser = useSelector(selectCurrentUser);
	const [isProcessing, setIsProcessing] = useState(false);
	const [isAlert, setIsAlert] = useState(false);
	const [alertMessage, setAlertMessage] = useState('');
	const navigate = useNavigate();

	const paymentHandler = async (e) => {
		e.preventDefault();
		if (!stripe || !elements) {
			return;
		}
		setIsAlert(false);
		setIsProcessing(true);

		const response = await fetch('/.netlify/functions/create-payment-intent', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ amount: cartTotal * 100 }),
		}).then((res) => res.json());
		const {
			paymentIntent: { client_secret },
		} = response;

		const paymentResult = await stripe.confirmCardPayment(client_secret, {
			payment_method: {
				card: elements.getElement(CardElement),
				billing_details: {
					name: currentUser ? currentUser.displayName : 'guest',
				},
			},
		});

		setIsProcessing(false);

		if (paymentResult.error) {
			setIsAlert(true);
			setAlertMessage(`${paymentResult.error.message}`);
		} else {
			if (paymentResult.paymentIntent.status === 'succeeded') {
				alert('Payment successful!');
				dispatch(setCartItems([]));
				navigate('/shop');
			}
		}
	};
	return (
		<div className='payment-form-container'>
			<form
				className='form-container'
				onSubmit={paymentHandler}
			>
				<h2> Please enter your card details:</h2>
				<CardElement />
				{isAlert && <span className='alert'>{alertMessage}</span>}
				<Button
					isLoading={isProcessing}
					btnStyle={BUTTON_STYLE_CLASSES.inverted}
				>
					Confirm
				</Button>
			</form>
		</div>
	);
};

export default PaymentForm;
