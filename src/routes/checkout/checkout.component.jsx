import { useContext } from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { CartContext } from '../../contexts/cart.context';
import './checkout.styles.scss';

const Checkout = () => {
	const { cartItems, cartTotal } = useContext(CartContext);
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
		</div>
	);
};
export default Checkout;
