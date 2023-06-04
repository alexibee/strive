import Button from '../button/button.component';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import CartItem from '../cart-item/cart-item.component';
import { setIsCartOpen } from '../../store/cart/cart.action';
import {
	selectCartItems,
	selectIsCartOpen,
} from '../../store/cart/cart.selector';
import { ForwardedRef, forwardRef } from 'react';
import {
	CartDropdownContainer,
	CartItems,
	CloseDropdown,
	EmptyMessage,
} from './cart-dropdown.styles';

const CartDropdown = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
	const cartItems = useSelector(selectCartItems);
	const isCartOpen = useSelector(selectIsCartOpen);
	const dispatch = useDispatch();

	const navigate = useNavigate();

	const closeCartDropdown = () => {
		if (isCartOpen) {
			dispatch(setIsCartOpen(false));
		}
	};

	const goToCheckoutHandler = () => {
		closeCartDropdown();
		navigate('/checkout');
	};

	return (
		<CartDropdownContainer ref={ref}>
			<CloseDropdown
				onClick={closeCartDropdown}
				to='#'
			>
				&times;
			</CloseDropdown>
			<CartItems>
				{cartItems.length ? (
					cartItems.map((item) => (
						<CartItem
							cartItem={item}
							key={item.id}
						/>
					))
				) : (
					<EmptyMessage>Your cart is empty</EmptyMessage>
				)}
			</CartItems>
			{!!cartItems.length && (
				<Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
			)}
		</CartDropdownContainer>
	);
});

export default CartDropdown;
