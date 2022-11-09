import { useState } from 'react';
import './sign-up-form.styles.scss';
import {
	createAuthUserWithEmailAndPassword,
	createUserDocFromAuth,
} from '../../utils/firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

const blankFormFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(blankFormFields);
	const { displayName, email, password, confirmPassword } = formFields;

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	const resetFormFields = () => {
		setFormFields(blankFormFields);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert('Passwords do not match');
			return;
		}
		try {
			const { user } = await createAuthUserWithEmailAndPassword(
				email,
				password
			);

			await createUserDocFromAuth(user, { displayName });

			resetFormFields();
		} catch (error) {
			if (error.code === 'auth/email-already-in-use') {
				alert('Could not create user, email already in use');
			} else {
				console.error(error);
			}
		}
	};

	return (
		<div className='sign-up-container'>
			<h2> Don't have an account yet? </h2>
			<span>Sign up with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label='Display Name'
					type='text'
					required
					name='displayName'
					onChange={handleChange}
					value={displayName}
				/>
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
				<FormInput
					label='Confirm Password'
					type='password'
					required
					name='confirmPassword'
					onChange={handleChange}
					value={confirmPassword}
				/>
				<Button type='submit'> Sign Up </Button>
			</form>
		</div>
	);
};

export default SignUpForm;
