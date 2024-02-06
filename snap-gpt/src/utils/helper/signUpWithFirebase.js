import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, firestore } from "../firebase/Firebase";
import { FILM_CHICKS_AVTAR_IMG } from "../Constant";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { getFirebaseStoreDoc } from "./getFirebaseStoreDoc";
import { addUser } from "../redux/slice/UserSlice";

export const signUpWithFirebase = (email, password, name, dispatch, navigate, setErrorMessage) => {

    // SignUp Logic
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;

            updateProfile(user, {
                displayName: name,
                photoURL: FILM_CHICKS_AVTAR_IMG,
            }).then(async () => {
                // Profile updated!
                const { uid, displayName, email, photoURL } = auth.currentUser;

                // Create Document
                const userDocRef = doc(firestore, 'users', uid);
                const userDoc = await getDoc(userDocRef);

                if (!userDoc.exists()) {
                    setDoc(userDocRef, {
                        email: email,
                        displayName: displayName,
                        openAiKey: null,
                        searchLimit: 2,
                    });
                }

                // Get fireStore doc & Set to user store
                getFirebaseStoreDoc(uid)
                    .then((docData) => {
                        dispatch(addUser(
                            {
                                uid: uid,
                                email: email,
                                displayName: displayName,
                                photoURL: photoURL,
                                searchLimit: docData?.searchLimit,
                                openAiKey: docData?.openAiKey,
                            }));
                    })
                    .catch((error) => console.error('Error fetching Firebase document:', error));

                navigate('/browse');
            }).catch((error) => {
                // An error occurred
                setErrorMessage(error.message);
            });
        })
        .catch((error) => {
            setErrorMessage(error.message);
        });
}

export const signInWithFirebase = (email, password, setErrorMessage) => {
    signInWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            const user = userCredential.user;
        })
        .catch((error) => {
            setErrorMessage(error.message);
        });
}