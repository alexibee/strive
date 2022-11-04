import './prod-card.styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../button/button.component';
import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

const ProdCard = ({ product }) => {
	const { name, imageUrl, price } = product;
	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);
	const addItemHandler = () => dispatch(addItemToCart(cartItems, product));

	return (
		<div className='prod-card-container'>
			<img
				alt={name}
				src={imageUrl}
			/>
			<div className='footer'>
				<span className='name'>{name}</span>
				<span className='price'>£{price}</span>
			</div>
			<Button
				btnStyle='inverted'
				onClick={addItemHandler}
			>
				Add to cart
			</Button>
		</div>
	);
};

export default ProdCard;
