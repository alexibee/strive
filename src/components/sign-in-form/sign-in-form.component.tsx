import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import {
	emailSignInStart,
	googleSignInStart,
	signInFail,
} from '../../store/user/user.action';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserError } from '../../store/user/user.selector';
import { ButtonsContainer, SignInContainer } from './sign-in-form.styles';

const blankFormFields = {
	email: '',
	password: '',
};

const SignInForm = () => {
	const [formFields, setFormFields] = useState(blankFormFields);
	const { email, password } = formFields;
	const dispatch = useDispatch();
	// const userError = useSelector(selectUserError);

	// useEffect(() => {
	// 	(async function () {
	// 		await getRedirectResult(auth);
	// 	})();
	// });

	// useEffect(() => {
	// 	if (userError) {
	// 		switch (userError.code) {
	// 			case 'auth/wrong-password':
	// 				alert('incorrect password for email');
	// 				break;
	// 			case 'auth/user-not-found':
	// 				alert('no user associated with this email');
	// 				break;
	// 			default:
	// 				alert(userError.message);
	// 				break;
	// 		}
	// 		console.error(userError);
	// 		dispatch(signInFail(null));
	// 	}
	// }, [userError, dispatch]);

	const logInGoogleUser = async () => {
		dispatch(googleSignInStart());
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	const resetFormFields = () => {
		setFormFields(blankFormFields);
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		try {
			dispatch(emailSignInStart(email, password));
			resetFormFields();
		} catch (error) {
			console.log('user sign in failed', error);
		}
	};

	return (
		<SignInContainer>
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
				<ButtonsContainer>
					<Button type='submit'> Sign In </Button>
					<Button
						type='button'
						onClick={logInGoogleUser}
						buttonType={BUTTON_TYPE_CLASSES.google}
					>
						Google Sign In
					</Button>
				</ButtonsContainer>
			</form>
		</SignInContainer>
	);
};

export default SignInForm;
