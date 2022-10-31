import './prod-card.styles.scss';
import Button from '../button/button.component';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';

const ProdCard = ({ product }) => {
	const { name, imageUrl, price } = product;
	const { addItemToCart } = useContext(CartContext);
	const addItemHandler = () => addItemToCart(product);

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
