import { useEffect, useState } from 'react';
import './sign-in-form.styles.scss';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import {
	emailSignInStart,
	googleSignInStart,
	signInFail,
} from '../../store/user/user.action';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserError } from '../../store/user/user.selector';

const blankFormFields = {
	email: '',
	password: '',
};

const SignInForm = () => {
	const [formFields, setFormFields] = useState(blankFormFields);
	const { email, password } = formFields;
	const dispatch = useDispatch();
	const userError = useSelector(selectUserError);

	// useEffect(() => {
	// 	(async function () {
	// 		await getRedirectResult(auth);
	// 	})();
	// });

	useEffect(() => {
		if (userError) {
			switch (userError.code) {
				case 'auth/wrong-password':
					alert('incorrect password for email');
					break;
				case 'auth/user-not-found':
					alert('no user associated with this email');
					break;
				default:
					alert(userError.message);
					break;
			}
			console.error(userError);
			dispatch(signInFail(null));
		}
	}, [userError, dispatch]);

	const logInGoogleUser = async () => {
		dispatch(googleSignInStart());
		// const {user} = await signInWithGooglePopup();
		// await createUserDocFromAuth(user);
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	const resetFormFields = () => {
		setFormFields(blankFormFields);
	};

	const handleSubmit = async (event) => {
		try {
			event.preventDefault();
			dispatch(emailSignInStart(email, password));
			resetFormFields();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='sign-in-container'>
			<h2> Already with us? </h2>
			<span>Sign in to your account</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label='Email'
					type='email'
					required
					name='email'
					onChange={handleChange}
					value={email}
				/>
				<FormInput
					label='Password'
					type='password'
					required
					name='password'
					onChange={handleChange}
					value={password}
				/>
				<div className='buttons-container'>
					<Button type='submit'> Sign In </Button>
					<Button
						type='button'
						onClick={logInGoogleUser}
						btnStyle={'google'}
					>
						Google Sign In
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;
