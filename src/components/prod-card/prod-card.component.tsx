import { useDispatch, useSelector } from 'react-redux';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import {
	addItemToCart,
	decreaseItemQuantity,
} from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import { FC, useEffect, useState } from 'react';
import {
	DoubleButtonContainer,
	Footer,
	Name,
	Price,
	ProductCartContainer,
	QuantityCounter,
} from './prod-card.styles';
import { CategoryItem } from '../../store/categories/category.types';

type ProductCardProps = {
	product: CategoryItem;
};

const ProdCard: FC<ProductCardProps> = ({ product }) => {
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
		<ProductCartContainer>
			<img
				alt={name}
				src={imageUrl}
			/>
			<Footer>
				<Name>{name}</Name>
				<Price>£{price}</Price>
			</Footer>
			<DoubleButtonContainer>
				{!isDoubleButton ? (
					<Button
						buttonType={BUTTON_TYPE_CLASSES.inverted}
						id='whole-button'
						onClick={addItemHandler}
					>
						Add to cart
					</Button>
				) : (
					<>
						<Button
							buttonType={BUTTON_TYPE_CLASSES.inverted}
							id='half-button'
							onClick={decreaseQuantityHandler}
						>
							-
						</Button>
						<QuantityCounter>{quantity}</QuantityCounter>
						<Button
							buttonType={BUTTON_TYPE_CLASSES.inverted}
							id='half-button'
							onClick={addItemHandler}
						>
							+
						</Button>
					</>
				)}
			</DoubleButtonContainer>
		</ProductCartContainer>
	);
};

export default ProdCard;
