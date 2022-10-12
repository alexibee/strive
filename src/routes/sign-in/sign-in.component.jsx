import { signInWithGooglePopup, createUserDocFromAuth } from '../../utils/firebase/firebase.utils';

const SignIn = () => {

  const logInGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
  }

  return (
    <div>
      <h1> Sign in Page </h1>
      <button onClick={logInGoogleUser}>
        Sign In With Google
      </button>
    </div>
  )
}

export default SignIn
