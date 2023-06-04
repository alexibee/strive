import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartTotal } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import { FormEvent, useState } from 'react';
import { setCartItems } from '../../store/cart/cart.action';
import { useNavigate } from 'react-router-dom';
import { setModalType } from '../../store/modal/modal.action';
import {
	Alert,
	FormContainer,
	PaymentFormContainer,
} from './payment-form.styles';
import { StripeCardElement } from '@stripe/stripe-js';

const ifValidCardElement = (
	card: StripeCardElement | null
): card is StripeCardElement => card !== null;

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

	const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
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

		const cardDetails = elements.getElement(CardElement);

		if (!ifValidCardElement(cardDetails)) return;

		const paymentResult = await stripe.confirmCardPayment(client_secret, {
			payment_method: {
				card: cardDetails,
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
				dispatch(setCartItems([]));
				dispatch(setModalType('confirmation'));
				navigate('/shop');
			}
		}
	};
	return (
		<PaymentFormContainer>
			<FormContainer onSubmit={paymentHandler}>
				<h2> Please enter your card details:</h2>
				<CardElement />
				{isAlert && <Alert>{alertMessage}</Alert>}
				<Button
					isLoading={isProcessing}
					buttonType={BUTTON_TYPE_CLASSES.inverted}
				>
					Confirm
				</Button>
			</FormContainer>
		</PaymentFormContainer>
	);
};

export default PaymentForm;
