import { useDispatch, useSelector } from 'react-redux';
import { signOutStart } from '../../store/user/user.action';
import {
	selectCurrentUser,
	selectUserIsLoading,
} from '../../store/user/user.selector';
import {
	BottomLineContainer,
	FooterColumn,
	FooterLink,
	InfoContainer,
	PageFooter,
	SignInLinks,
} from './footer.styles';

const Footer = () => {
	const currentUser = useSelector(selectCurrentUser);
	const isLoading = useSelector(selectUserIsLoading);
	const dispatch = useDispatch();

	const signOutUser = () => dispatch(signOutStart());

	return (
		<>
			<PageFooter>
				<InfoContainer>
					<FooterColumn>
						<h3> GO TO:</h3>
						<FooterLink to='/'>Home</FooterLink>
						<FooterLink to='/shop'>Shop</FooterLink>
					</FooterColumn>
					<FooterColumn>
						<h3> MAIN CATEGORIES:</h3>
						<FooterLink to='/shop/womens'>Womens</FooterLink>
						<FooterLink to='/shop/mens'>Mens</FooterLink>
					</FooterColumn>
					<FooterColumn>
						<h3>SHOP CLOTHING:</h3>
						<FooterLink to='/shop/hats'>Hats</FooterLink>
						<FooterLink to='/shop/jackets'>Jackets</FooterLink>
						<FooterLink to='/shop/sneakers'>Sneakers</FooterLink>
					</FooterColumn>
					<SignInLinks>
						{!currentUser && !isLoading ? (
							<>
								<FooterLink to='/auth'>Sign Up</FooterLink>
								<FooterLink to='/auth'>Sign In</FooterLink>
							</>
						) : (
							<FooterLink
								to='/'
								onClick={signOutUser}
							>
								Sign out
							</FooterLink>
						)}
					</SignInLinks>
				</InfoContainer>
				<BottomLineContainer>
					<p>copyright</p>
					<p>privacy policy</p>
				</BottomLineContainer>
			</PageFooter>
		</>
	);
};

export default Footer;
