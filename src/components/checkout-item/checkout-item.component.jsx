import './checkout-item.styles.scss';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';

const CheckoutItem = ({ item }) => {
	const { name, imageUrl, price, quantity } = item;
	const { addItemToCart, reduceItemQuantity, removeItemFromCart } =
		useContext(CartContext);

	const decreaseQuantityHandler = () => reduceItemQuantity(item);
	const increaseQuantityHandler = () => addItemToCart(item);
	const removeItemHandler = () => removeItemFromCart(item);

	return (
		<div className='checkout-item-container'>
			<div className='image-container'>
				<img
					src={imageUrl}
					alt={name}
				/>
			</div>
			<span className='name'>{name}</span>
			<span className='quantity'>
				<div
					className='arrow'
					onClick={decreaseQuantityHandler}
				>
					&#10094;
				</div>
				<span className='value'>{quantity}</span>
				<div
					className='arrow'
					onClick={increaseQuantityHandler}
				>
					&#10095;
				</div>
			</span>
			<span className='price'>£{price}</span>
			<div
				className='remove-item'
				onClick={removeItemHandler}
			>
				&times;
			</div>
		</div>
	);
};

export default CheckoutItem;
