import { useSelector, useDispatch } from 'react-redux';
import {
	addItemToCart,
	decreaseItemQuantity,
	removeItemFromCart,
} from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import {
	Arrow,
	BaseSpan,
	CheckoutItemContainer,
	ImageContainer,
	Quantity,
	RemoveButton,
	Value,
} from './checkout-item.styles';

import { CartItem } from '../../store/cart/cart.types';
import { FC } from 'react';

type CheckoutItemProps = {
	cartItem: CartItem;
};

const CheckoutItem: FC<CheckoutItemProps> = ({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	const cartItems = useSelector(selectCartItems);
	const dispatch = useDispatch();

	const decreaseQuantityHandler = () =>
		dispatch(decreaseItemQuantity(cartItems, cartItem));
	const increaseQuantityHandler = () =>
		dispatch(addItemToCart(cartItems, cartItem));
	const removeItemHandler = () =>
		dispatch(removeItemFromCart(cartItems, cartItem));

	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<img
					src={imageUrl}
					alt={name}
				/>
			</ImageContainer>
			<BaseSpan>{name}</BaseSpan>
			<Quantity>
				<Arrow onClick={decreaseQuantityHandler}>&#10094;</Arrow>
				<Value>{quantity}</Value>
				<Arrow onClick={increaseQuantityHandler}>&#10095;</Arrow>
			</Quantity>
			<BaseSpan>£{price}</BaseSpan>
			<RemoveButton onClick={removeItemHandler}>&times;</RemoveButton>
		</CheckoutItemContainer>
	);
};

export default CheckoutItem;
