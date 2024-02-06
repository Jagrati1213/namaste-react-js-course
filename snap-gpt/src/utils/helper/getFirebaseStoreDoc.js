import { doc, getDoc } from 'firebase/firestore';
import { firestore } from '../firebase/Firebase';

/**
 * A function use to get the document of related user.
 * 
 * @param uid - Take a Uid of user.
 * 
 * @returns `Data` - Return user document.
 * @returns `Null` - Return null if user Doc not exit.
 *  
 **/

export const getFirebaseStoreDoc = async (uid) => {

    const docRef = doc(firestore, "users", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        return null;
    }
}
