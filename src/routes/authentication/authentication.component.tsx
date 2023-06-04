import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {
	selectCurrentUser,
	selectUserIsLoading,
} from '../../store/user/user.selector';
import Spinner from '../../components/spinner/spinner.component';
import { AuthenticationContainer } from './authentication.styles';

const Authentication = () => {
	const currentUser = useSelector(selectCurrentUser);
	const isLoading = useSelector(selectUserIsLoading);

	return (
		<>
			{!isLoading && !currentUser ? (
				<AuthenticationContainer>
					<SignInForm />
					<SignUpForm />
				</AuthenticationContainer>
			) : isLoading ? (
				<Spinner />
			) : (
				<Navigate to='/' />
			)}
		</>
	);
};

export default Authentication;
