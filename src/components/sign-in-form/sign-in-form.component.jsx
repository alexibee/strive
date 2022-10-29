import { useEffect, useState } from 'react';
import './sign-in-form.styles.scss';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import {
	auth,
	createUserDocFromAuth,
	defaultSignIn,
	signInWithGoogleRedirect,
} from '../../utils/firebase/firebase.utils';
import { getRedirectResult } from 'firebase/auth';

const blankFormFields = {
	email: '',
	password: '',
};

const SignInForm = ({ googleSignInHandler }) => {
	const [formFields, setFormFields] = useState(blankFormFields);
	const { email, password } = formFields;

	useEffect(() => {
		(async function () {
			await getRedirectResult(auth);
		})();
	});

	// const logInGoogleUser = async () => {
	//   const {user} = await signInWithGooglePopup();
	//   await createUserDocFromAuth(user);
	// }

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	const resetFormFields = () => {
		setFormFields(blankFormFields);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			await defaultSignIn(email, password);
			resetFormFields();
		} catch (error) {
			switch (error.code) {
				case 'auth/wrong-password':
					alert('incorrect password for email');
					break;
				case 'auth/user-not-found':
					alert('no user associated with this email');
					break;
				default:
					break;
			}
			console.error(error);
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
						onClick={signInWithGoogleRedirect}
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
