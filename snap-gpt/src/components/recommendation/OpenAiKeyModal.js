import { doc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useRef, useState } from 'react'
import { GrClose } from "react-icons/gr";
import { useDispatch, useSelector } from 'react-redux';
import { addUser, selectUserState } from '../../utils/redux/slice/UserSlice';
import { firestore } from '../../utils/firebase/Firebase';
import { getFirebaseStoreDoc } from '../../utils/helper/getFirebaseStoreDoc';
import { checkValidationOfKey } from '../../utils/helper/checkValidationofKey';
import { AES } from 'crypto-js';

export const OpenAiKeyModal = ({ message_401, setShowModal, showModal, setError }) => {

    const modalRef = useRef();
    const keyRef = useRef(null);
    const [message, setMessage] = useState(null);
    const user = useSelector(selectUserState);
    const dispatch = useDispatch();

    const handleAddKey = async () => {

        if (keyRef.current.value === '') {
            setMessage("enter your key...")
            setTimeout(() => setMessage(null), 1000);
            return;
        }
        else {
            // Check Key validation
            const validationOfKey = checkValidationOfKey(keyRef.current.value);
            setMessage(validationOfKey);
            if (validationOfKey) return;

            const userRef = doc(firestore, "users", user?.uid);
            const encryptedOpenKey = AES.encrypt(keyRef.current.value, process.env.REACT_APP_SECRET_KEY).toString();

            await updateDoc(userRef, {
                openAiKey: encryptedOpenKey,
            });
            const docData = await getFirebaseStoreDoc(user.uid);
            dispatch(addUser({ ...user, openAiKey: docData?.openAiKey }));
            setShowModal(false);
            setError(null);
        }
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    // Close if user click outside of modal
    useEffect(() => {

        const handleClickOutside = (event) => {
            if (showModal && modalRef.current && !modalRef.current.contains(event.target)) {
                handleCloseModal();
            }
        };

        if (showModal) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };

    }, [showModal]);

    return (
        <div id="modal" className="w-full h-screen flex items-center justify-center absolute bg-transparent  backdrop-blur-sm  z-[21]">
            <div
                className="text-white max-w-xl w-full rounded-sm py-5 px-10 bg-gray-950 z-50"
                ref={modalRef}>

                <div className="p-3 flex items-center justify-between">
                    <h3 className="font-semibold text-xl">Set Your Key</h3>
                    <p className="cursor-pointer text-base" onClick={handleCloseModal}>
                        <GrClose />
                    </p>
                </div>

                <div className="p-3">
                    <p>
                        {message_401
                            ? 'You OpenAI Key is Invalid. To continue using the search feature,please add right OpenAI API key.'
                            : 'You have exceeded your search limit. To continue using the search feature,please add your OpenAI API key.'}
                    </p>
                    <a className="w-full text-sm decoration-solid underline text-blue-300 mt-3" href="https://platform.openai.com/" target='_blank'>Learn How to create openAi key..</a>
                    <input ref={keyRef}
                        type="text"
                        placeholder='enter your key here'
                        className='w-full py-2 px-3 mt-5 bg-yellow-800 text-white placeholder:text-gray-300 border-2 border-yellow-600 outline-none rounded-sm' />
                    <p className='text-red-600'>{message}</p>
                </div>
                <div className="p-3 flex items-center justify-start">
                    <button onClick={handleAddKey} className="text-sm font-semibold text-white bg-green-500 hover:bg-green-600 rounded-sm px-4 py-2">Add Key</button>
                </div>
            </div>
        </div>
    )
}
