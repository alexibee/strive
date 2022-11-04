import './cart-item.styles.scss';
import { Link } from 'react-router-dom';
import {
	addItemToCart,
	decreaseItemQuantity,
} from '../../store/cart/cart.action';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';

const CartItem = ({ item }) => {
	const { name, imageUrl, quantity, price } = item;
	const cartItems = useSelector(selectCartItems);
	const dispatch = useDispatch();

	const addItemHandler = () => dispatch(addItemToCart(cartItems, item));
	const removeItemHandler = () =>
		dispatch(decreaseItemQuantity(cartItems, item));

	return (
		<div className='cart-item-container'>
			<img
				src={imageUrl}
				alt={name}
			/>
			<div className='item-details'>
				<span className='name'>{name}</span>
				<span className='price'>
					{quantity} x £{price}
				</span>
				<div className='plus-minus-links'>
					<Link onClick={removeItemHandler}>-</Link> /
					<Link onClick={addItemHandler}>+</Link>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
