import Button from '../button/button.component';
import './cart-item.styles.scss';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const CartItem = ({ item }) => {
	const { addItemToCart, reduceItemQuantity } = useContext(CartContext);

	const { name, imageUrl, quantity, price } = item;

	const addItemHandler = () => addItemToCart(item);
	const removeItemHandler = () => reduceItemQuantity(item);

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
