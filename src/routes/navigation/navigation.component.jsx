import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './navigation.styles.scss';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { ReactComponent as StriveLogo } from '../../assets/strive_logo.svg';

import { CartContext } from '../../contexts/cart.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

const Navigation = () => {
	const currentUser = useSelector((state) => state.user.currentUser);
	const { isCartOpen } = useContext(CartContext);

	return (
		<>
			<div className='navigation'>
				<Link
					className='logo-container'
					to='/'
				>
					<StriveLogo className='logo' />
				</Link>

				<div className='nav-links-container'>
					<Link
						className='nav-link'
						to={'/shop'}
					>
						SHOP
					</Link>
					{currentUser ? (
						<span
							className='nav-link'
							onClick={signOutUser}
						>
							SIGN OUT
						</span>
					) : (
						<Link
							className='nav-link'
							to='/auth'
						>
							SIGN IN
						</Link>
					)}
					{currentUser && <CartIcon />}
				</div>
				{isCartOpen && <CartDropdown />}
			</div>
			<Outlet />
		</>
	);
};
export default Navigation;
