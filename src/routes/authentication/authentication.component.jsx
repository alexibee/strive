import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import './authentication.styles.scss';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {
	selectCurrentUser,
	selectUserIsLoading,
} from '../../store/user/user.selector';
import Spinner from '../../components/spinner/spinner.component';

const Authentication = () => {
	const currentUser = useSelector(selectCurrentUser);
	const isLoading = useSelector(selectUserIsLoading);

	return (
		<>
			{!isLoading && !currentUser ? (
				<div className='authentication-container'>
					<SignInForm />
					<SignUpForm />
				</div>
			) : isLoading ? (
				<Spinner />
			) : (
				<Navigate to='/' />
			)}
		</>
	);
};

export default Authentication;
