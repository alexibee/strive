import Button from '../button/button.component';
import './cart-dropdown.styles.scss';

import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import { CartContext } from '../../contexts/cart.context';
import { Link } from 'react-router-dom';

const CartDropdown = () => {
	const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);

	const navigate = useNavigate();

	const closeCartDropdown = () => {
		if (isCartOpen) {
			setIsCartOpen(false);
		}
	};

	const goToCheckoutHandler = () => {
		closeCartDropdown();
		navigate('/checkout');
	};

	return (
		<div className='cart-dropdown-container'>
			<Link
				className='close-dropdown'
				onClick={closeCartDropdown}
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
					<span className='empty-message'> Your cart is empty</span>
				)}
			</div>
			{!!cartItems.length && (
				<Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
			)}
		</div>
	);
};

export default CartDropdown;
