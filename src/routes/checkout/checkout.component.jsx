import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { useSelector } from 'react-redux';
import './checkout.styles.scss';
import {
	selectCartItems,
	selectCartTotal,
} from '../../store/cart/cart.selector';
import PaymentForm from '../../components/payment-form/payment-form.component';
import Button from '../../components/button/button.component';
import { useState } from 'react';
import Modal from '../../components/modal/modal.component';

const Checkout = () => {
	const cartItems = useSelector(selectCartItems);
	const cartTotal = useSelector(selectCartTotal);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const toggleModal = () => {
		setIsModalOpen((prev) => !prev);
	};
	return (
		<div className='checkout-container'>
			<h1> Checkout</h1>
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
			{cartItems.map((item) => {
				return (
					<CheckoutItem
						key={item.id}
						item={item}
					/>
				);
			})}
			<span className='total'>Total: £{cartTotal} </span>
			<Button onClick={toggleModal}>Proceed to payment</Button>
			<Modal
				isOpen={isModalOpen}
				setIsOpen={setIsModalOpen}
			>
				<PaymentForm />
			</Modal>
		</div>
	);
};
export default Checkout;
