import './prod-card.styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../button/button.component';
import {
	addItemToCart,
	decreaseItemQuantity,
} from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import { useEffect, useState } from 'react';

const ProdCard = ({ product }) => {
	const { id, name, imageUrl, price } = product;
	const [isDoubleButton, setIsDoubleButton] = useState(false);
	const [quantity, setQuantity] = useState(0);
	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);

	const addItemHandler = () => {
		dispatch(addItemToCart(cartItems, product));
	};
	const decreaseQuantityHandler = () =>
		dispatch(decreaseItemQuantity(cartItems, product));

	useEffect(() => {
		const item = cartItems.find((el) => el.id === id);
		if (item) {
			setIsDoubleButton(true);
			setQuantity(item.quantity);
		} else {
			setIsDoubleButton(false);
			setQuantity(0);
		}
	}, [cartItems, id]);

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
			<div className='double-button-container'>
				{!isDoubleButton ? (
					<Button
						btnStyle='inverted'
						id='whole-button'
						onClick={addItemHandler}
					>
						Add to cart
					</Button>
				) : (
					<>
						<Button
							btnStyle='inverted'
							id='half-button'
							onClick={decreaseQuantityHandler}
						>
							-
						</Button>
						<span className='qCounter'>{quantity}</span>
						<Button
							btnStyle='inverted'
							id='half-button'
							onClick={addItemHandler}
						>
							+
						</Button>
					</>
				)}
			</div>
		</div>
	);
};

export default ProdCard;
