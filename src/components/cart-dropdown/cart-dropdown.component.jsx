import Button from '../button/button.component';
import './cart-dropdown.styles.scss';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import CartItem from '../cart-item/cart-item.component';
import { Link } from 'react-router-dom';
import { setIsCartOpen } from '../../store/cart/cart.action';
import {
	selectCartItems,
	selectIsCartOpen,
} from '../../store/cart/cart.selector';
import { forwardRef } from 'react';

const CartDropdown = forwardRef((props, ref) => {
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
		<div
			className='cart-dropdown-container'
			ref={ref}
		>
			<Link
				className='close-dropdown'
				onClick={closeCartDropdown}
				to='#'
			>
				&times;
			</Link>
			<div className='cart-items'>
				{cartItems.length ? (
					cartItems.map((item) => (
						<CartItem
							item={item}
							key={item.id}
						/>
					))
				) : (
					<span className='empty-message'>Your cart is empty</span>
				)}
			</div>
			{!!cartItems.length && (
				<Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
			)}
		</div>
	);
});

export default CartDropdown;
