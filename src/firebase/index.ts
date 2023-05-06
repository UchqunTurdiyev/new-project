import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
	apiKey: 'AIzaSyBu49sEJuzDIK2eL7D_YltKFuX1je_Jw4c',
	authDomain: 'sammi-movie-app.firebaseapp.com',
	projectId: 'sammi-movie-app',
	storageBucket: 'sammi-movie-app.appspot.com',
	messagingSenderId: '92350315428',
	appId: '1:665592469160:web:f82ea080ff1420d1aa549d',
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth();

export default app;
export { db, auth };
