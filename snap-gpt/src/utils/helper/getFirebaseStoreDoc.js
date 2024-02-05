import { doc, getDoc } from 'firebase/firestore';
import { firestore } from '../firebase/Firebase';

export const getFirebaseStoreDoc = async (uid) => {

    const docRef = doc(firestore, "users", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        return null;
    }
}
