import { collection, getDocs } from 'firebase/firestore';
import { db } from 'src/firebase';
import { MyList } from '../interfaces/app.interfaces';

export const getList = async (userId?: string) => {
	let myList: MyList[] = [];
	const querySnapshot = await getDocs(collection(db, 'list'));
	querySnapshot.forEach(doc => {
		if (doc.data().userId == userId) {
			myList.push(doc.data() as MyList);
		}
	});

	return myList;
};
