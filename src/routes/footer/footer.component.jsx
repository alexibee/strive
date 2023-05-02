import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOutStart } from '../../store/user/user.action';
import {
	selectCurrentUser,
	selectUserIsLoading,
} from '../../store/user/user.selector';
import './footer.styles.scss';

const Footer = () => {
	const currentUser = useSelector(selectCurrentUser);
	const isLoading = useSelector(selectUserIsLoading);
	const dispatch = useDispatch();

	const signOutUser = () => dispatch(signOutStart());

	return (
		<>
			<div className='page-footer'>
				<div className='info-container'>
					<div className='footer-column'>
						<h3> GO TO:</h3>
						<Link
							className='footer-link'
							to='/'
						>
							Home
						</Link>
						<Link
							className='footer-link'
							to='/shop'
						>
							Shop
						</Link>
					</div>
					<div className='footer-column'>
						<h3> MAIN CATEGORIES:</h3>
						<Link
							className='footer-link'
							to='/shop/womens'
						>
							Womens
						</Link>
						<Link
							className='footer-link'
							to='/shop/mens'
						>
							Mens
						</Link>
					</div>
					<div className='footer-column'>
						<h3>SHOP CLOTHING:</h3>
						<Link
							className='footer-link'
							to='/shop/hats'
						>
							Hats
						</Link>
						<Link
							className='footer-link'
							to='/shop/jackets'
						>
							Jackets
						</Link>
						<Link
							className='footer-link'
							to='/shop/sneakers'
						>
							Sneakers
						</Link>
					</div>
					<div className='sign-in-links'>
						{!currentUser && !isLoading ? (
							<>
								<Link
									className='footer-link'
									to='/auth'
								>
									Sign Up
								</Link>
								<Link
									className='footer-link'
									to='/auth'
								>
									Sign In
								</Link>
							</>
						) : (
							<Link
								to='/'
								onClick={signOutUser}
								className='footer-link'
							>
								Sign out
							</Link>
						)}
					</div>
				</div>
				<div className='bottom-line-container'>
					<p>copyright</p>
					<p>privacy policy</p>
				</div>
			</div>
		</>
	);
};

export default Footer;
