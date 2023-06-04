import { Outlet, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { selectIsCartOpen } from '../../store/cart/cart.selector';
import {
	selectCurrentUser,
	selectUserIsLoading,
} from '../../store/user/user.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';
import { useRef } from 'react';
import { signOutStart } from '../../store/user/user.action';
import {
	BodyWrapper,
	NavLinkStyled,
	NavLinksContainer,
	NavigationContainer,
	StriveLogo,
} from './navigation.styles';

const Navigation = () => {
	const currentUser = useSelector(selectCurrentUser);
	const isLoading = useSelector(selectUserIsLoading);
	const isCartOpen = useSelector(selectIsCartOpen);
	const dispatch = useDispatch();
	const cartRef = useRef<HTMLDivElement>(null);

	const signOutUser = () => dispatch(signOutStart());

	return (
		<BodyWrapper
			onClick={(e) => {
				if (
					isCartOpen &&
					cartRef.current &&
					!cartRef.current.contains(e.target as Node)
				)
					dispatch(setIsCartOpen(false));
			}}
		>
			<NavigationContainer>
				<Link to='/'>
					<StriveLogo />
				</Link>
				{!isLoading ? (
					<NavLinksContainer>
						<NavLinkStyled to={'/shop'}>SHOP</NavLinkStyled>
						{currentUser ? (
							<NavLinkStyled
								to='/'
								onClick={signOutUser}
							>
								SIGN OUT
							</NavLinkStyled>
						) : (
							<NavLinkStyled to='/auth'>SIGN IN</NavLinkStyled>
						)}
						{currentUser && <CartIcon />}
					</NavLinksContainer>
				) : (
					<></>
				)}
				{isCartOpen && <CartDropdown ref={cartRef} />}
			</NavigationContainer>
			<Outlet />
		</BodyWrapper>
	);
};
export default Navigation;
