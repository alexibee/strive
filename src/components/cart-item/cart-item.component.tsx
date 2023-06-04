import { Link } from 'react-router-dom';
import {
	addItemToCart,
	decreaseItemQuantity,
} from '../../store/cart/cart.action';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import {
	CartItemContainer,
	ItemDetails,
	ItemImage,
	ItemName,
	PlusMinus,
} from './cart-item.styles';

import { CartItem as TCartItem } from '../../store/cart/cart.types';
import { FC } from 'react';

type CartItemProps = {
	cartItem: TCartItem;
};

const CartItem: FC<CartItemProps> = ({ cartItem }) => {
	const { name, imageUrl, quantity, price } = cartItem;
	const cartItems = useSelector(selectCartItems);
	const dispatch = useDispatch();

	const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
	const removeItemHandler = () =>
		dispatch(decreaseItemQuantity(cartItems, cartItem));

	return (
		<CartItemContainer>
			<ItemImage
				src={imageUrl}
				alt={name}
			/>
			<ItemDetails>
				<ItemName>{name}</ItemName>
				<span>
					{quantity} x £{price}
				</span>
				<PlusMinus>
					<Link
						to='#'
						onClick={removeItemHandler}
					>
						-
					</Link>{' '}
					/
					<Link
						to='#'
						onClick={addItemHandler}
					>
						+
					</Link>
				</PlusMinus>
			</ItemDetails>
		</CartItemContainer>
	);
};

export default CartItem;
