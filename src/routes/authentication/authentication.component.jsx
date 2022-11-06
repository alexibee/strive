import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import './authentication.styles.scss';
import { useEffect } from 'react';
import { setCurrentUser } from '../../store/user/user.action';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import {
	selectCurrentUser,
	selectUserIsLoading,
} from '../../store/user/user.selector';
import Spinner from '../../components/spinner/spinner.component';

const Authentication = () => {
	const currentUser = useSelector(selectCurrentUser);
	const isLoading = useSelector(selectUserIsLoading);
	// const currentUser = useSelector
	// const navigate = useNavigate();

	// console.log(`auth`, currentUser);

	// // useEffect(() => {
	// // 	if (currentUser) {
	// // 		navigate('/', { replace: true });
	// // 	}
	// // }, [currentUser]);

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
