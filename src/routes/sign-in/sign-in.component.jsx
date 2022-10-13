import {
	auth,
	signInWithGooglePopup,
	signInWithGoogleRedirect,
	createUserDocFromAuth,
} from '../../utils/firebase/firebase.utils';
import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const SignIn = () => {
	useEffect(() => {
		(async function () {
			const response = await getRedirectResult(auth);
			if (response) {
				const userDocRef = await createUserDocFromAuth(response.user);
			}
		})();
	}, []);

	// const logInGoogleUser = async () => {
	//   const {user} = await signInWithGooglePopup();
	//   const userDocRef = await createUserDocFromAuth(user);
	// }

	return (
		<div>
			<h1> Sign in Page </h1>
			{/* <button onClick={logInGoogleUser}> */}
			<button onClick={signInWithGoogleRedirect}>Sign In With Google</button>
			<SignUpForm />
		</div>
	);
};

export default SignIn;
