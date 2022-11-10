import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { useSelector } from 'react-redux';
import './checkout.styles.scss';
import {
	selectCartCount,
	selectCartItems,
	selectCartTotal,
} from '../../store/cart/cart.selector';
import PaymentForm from '../../components/payment-form/payment-form.component';
import Button from '../../components/button/button.component';
import { useState } from 'react';
import Modal from '../../components/modal/modal.component';
import { Link } from 'react-router-dom';

const Checkout = () => {
	const cartItems = useSelector(selectCartItems);
	const cartTotal = useSelector(selectCartTotal);
	const cartCount = useSelector(selectCartCount);
	const [isPaymentOpen, setIsPaymentOpen] = useState(false);

	const openPayment = () => {
		setIsPaymentOpen((prev) => !prev);
	};
	return (
		<>
			<Modal
				isOpen={isPaymentOpen}
				setIsOpen={setIsPaymentOpen}
			>
				<PaymentForm />
			</Modal>
			<div className='checkout-container'>
				<div className='checkout-cart-container'>
					<div className='checkout-main-header'>
						<h1> Your cart ({cartCount} items)</h1>
					</div>
					<div className='checkout-header'>
						<div className='header-col'>
							<span>Product</span>
						</div>
						<div className='header-col'>
							<span>Description</span>
						</div>
						<div className='header-col'>
							<span>Quantity</span>
						</div>
						<div className='header-col'>
							<span>Price</span>
						</div>
						<div className='header-col'>
							<span>Remove</span>
						</div>
					</div>
					{cartCount ? (
						cartItems.map((item) => {
							return (
								<CheckoutItem
									key={item.id}
									item={item}
								/>
							);
						})
					) : (
						<>
							<h2>Your cart is empty...</h2>
							<Link
								style={{ margin: '0 auto 50px auto', fontSize: '24px' }}
								to='/shop'
							>
								&#10094; &#10094; Go Back To Shop
							</Link>
						</>
					)}
				</div>
				{!!cartCount && (
					<div className='total-container'>
						<span className='total'>Total</span>
						<div className='total-table'>
							<div className='total-table-row'>
								<span>Subtotal: </span>
								<span>£{cartTotal} </span>
							</div>
							<div className='total-table-row'>
								<span>Delivery: </span>
								<span>£0 </span>
							</div>
							<div className='total-table-row final-total'>
								<span>Total (VAT included): </span>
								<span>£{cartTotal} </span>
							</div>
						</div>
						{!!cartCount && (
							<>
								<Button onClick={openPayment}>Proceed to payment</Button>
							</>
						)}
					</div>
				)}
			</div>
		</>
	);
};
export default Checkout;
