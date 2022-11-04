import './checkout-item.styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import {
	addItemToCart,
	decreaseItemQuantity,
	removeItemFromCart,
} from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

const CheckoutItem = ({ item }) => {
	const { name, imageUrl, price, quantity } = item;
	const cartItems = useSelector(selectCartItems);
	const dispatch = useDispatch();

	const decreaseQuantityHandler = () =>
		dispatch(decreaseItemQuantity(cartItems, item));
	const increaseQuantityHandler = () =>
		dispatch(addItemToCart(cartItems, item));
	const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, item));

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
