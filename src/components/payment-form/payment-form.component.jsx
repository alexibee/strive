import './payment-form.styles.scss';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Button, { BUTTON_STYLE_CLASSES } from '../button/button.component';
import { useSelector } from 'react-redux';
import { selectCartTotal } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';

const PaymentForm = () => {
	const stripe = useStripe();
	const elements = useElements();
	const cartTotal = useSelector(selectCartTotal);
	const currentUser = useSelector(selectCurrentUser);
	const paymentHandler = async (e) => {
		e.preventDefault();
		if (!stripe || !elements) {
			return;
		}
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
					name: currentUser.displayName,
				},
			},
		});
		if (paymentResult.error) {
			alert(paymentResult.error.message);
		} else {
			if (paymentResult.paymentIntent.status === 'succeeded') {
				alert('Payment successful!');
			}
		}
	};
	return (
		<div className='payment-form-container'>
			<form
				className='form-container'
				onSubmit={paymentHandler}
			>
				<h2> Card Payment:</h2>
				<CardElement />
				<Button btnStyle={BUTTON_STYLE_CLASSES.inverted}> Pay now </Button>
			</form>
		</div>
	);
};

export default PaymentForm;
