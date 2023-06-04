import { ChangeEvent, FormEvent, useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { signUpStart } from '../../store/user/user.action';
import { useDispatch } from 'react-redux';
import { SignUpContainer } from './sign-up-form.styles';
import { AuthError, AuthErrorCodes } from 'firebase/auth';

const blankFormFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(blankFormFields);
	const { displayName, email, password, confirmPassword } = formFields;
	const dispatch = useDispatch();

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	const resetFormFields = () => {
		setFormFields(blankFormFields);
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert('Passwords do not match');
			return;
		}

		try {
			dispatch(signUpStart(email, password, displayName));

			resetFormFields();
		} catch (error) {
			if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
				alert('Could not create user, email already in use');
			} else {
				console.error(error);
			}
		}
	};

	return (
		<SignUpContainer>
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
		</SignUpContainer>
	);
};

export default SignUpForm;
