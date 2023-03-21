import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDfeNieho-GehuH1KAWEJLEQt8fBGVJjUE',
	authDomain: 'movie-app-19bae.firebaseapp.com',
	projectId: 'movie-app-19bae',
	storageBucket: 'movie-app-19bae.appspot.com',
	messagingSenderId: '665592469160',
	appId: '1:665592469160:web:f82ea080ff1420d1aa549d',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth();

export default app;
export { db, auth };
