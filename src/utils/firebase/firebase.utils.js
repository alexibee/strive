import { initializeApp } from 'firebase/app';

import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth';
import {
	doc,
	getDoc,
	getFirestore,
	setDoc,
	collection,
	writeBatch,
	query,
	getDocs,
} from 'firebase/firestore';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIRE_BASE_API_KEY,
	authDomain: process.env.REACT_APP_FIRE_BASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIRE_BASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIRE_BASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIRE_BASE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FIRE_BASE_APP_ID,
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
	prompt: 'select_account',
});

export const auth = getAuth();
// export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
	signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocs = async (collectionKey, objsToAdd, field) => {
	const collectionRef = collection(db, collectionKey);
	const batch = writeBatch(db);

	objsToAdd.forEach((obj) => {
		const docRef = doc(collectionRef, obj[field].toLowerCase());
		batch.set(docRef, obj);
	});

	await batch.commit();
	console.log('done');
};

export const getCategoriesAndDocs = async () => {
	const collectionRef = collection(db, 'categories');
	const q = query(collectionRef);

	const querySnapshot = await getDocs(q);
	return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

export const createUserDocFromAuth = async (userAuth, otherInfo = {}) => {
	if (!userAuth) return;

	const userDocRef = doc(db, 'users', userAuth.uid);
	const userSnapshot = await getDoc(userDocRef);

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...otherInfo,
			});
		} catch (error) {
			console.error(error);
		}
	}

	return userDocRef;
};

export const defaultSignIn = async (email, password) => {
	if (!email || !password) return;
	return await signInWithEmailAndPassword(auth, email, password);
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;
	return await createUserWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
	onAuthStateChanged(auth, callback);
