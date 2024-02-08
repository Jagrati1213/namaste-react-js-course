import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addGptSearch, setLoading } from '../../utils/redux/slice/GptSlice';
import { getTmdbRecommendation } from '../../utils/helper/getTmdbRecommendation';
import { OpenAiKeyModal } from './OpenAiKeyModal';
import { addUser, selectUserState } from '../../utils/redux/slice/UserSlice';
import { doc, updateDoc } from "firebase/firestore";
import { firestore } from '../../utils/firebase/Firebase';
import { getFirebaseStoreDoc } from '../../utils/helper/getFirebaseStoreDoc';
import { LimitExpire } from '../error/LimitExpire';

export const SearchBar = () => {

    const searchRef = useRef();
    const dispatch = useDispatch();
    const { loading } = useSelector((store) => store.gpt);
    const user = useSelector(selectUserState);

    const [showModal, setShowModal] = useState(false);
    const [Error, setError] = useState(null);
    const [message_401, setMessage_401] = useState(false);


    // Search Logic
    const handleOnsubmit = async (e) => {

        // stop auto submission
        e.preventDefault();
        setError(null);

        // Create firebase Doc ref
        const userRef = doc(firestore, "users", user?.uid);

        // Check input field
        if (searchRef.current.value === '') return alert("Enter which type of movie you want to see");

        // Check search Limit
        if (user?.searchLimit > 0) {

            dispatch(setLoading(true));

            // Get Search query data
            getTmdbRecommendation(searchRef.current.value, user)
                .then(async (data) => {

                    if (data[0][0].length === 0) {
                        setError(data[1]);
                        dispatch(setLoading(false));
                    }
                    else {
                        dispatch(addGptSearch({ moviesName: data[1], moviesResult: data[0] }));
                        dispatch(setLoading(false));

                        // Update doc Limit
                        await updateDoc(userRef, {
                            searchLimit: user?.searchLimit - 1,
                        });
                        // Get doc && Update in store
                        const docData = await getFirebaseStoreDoc(user?.uid);
                        dispatch(addUser({ ...user, searchLimit: docData?.searchLimit }));
                    }

                })
                .catch((error) => {
                    if (error.status == 429) {
                        setError(error.message);
                        dispatch(setLoading(false));
                    }
                });
        }
        else {

            if (user?.openAiKey === null) {
                setShowModal(true);
                setMessage_401(false);
            } else {
                dispatch(setLoading(true));
            }

            getTmdbRecommendation(searchRef.current.value, user)
                .then((data) => {
                    if (data[0][0].length === 0) {
                        setError(data[1]);
                        dispatch(setLoading(false));
                    }
                    else {
                        dispatch(addGptSearch({ moviesName: data[1], moviesResult: data[0] }))
                        dispatch(setLoading(false));
                        setError(null);
                    }
                })
                .catch((error) => {
                    if (error.status == 429) setError(error.message)
                    if (error.status == 401) {
                        setShowModal(true);
                        setError(error.message);
                        setMessage_401(true);
                    }
                    dispatch(setLoading(false));
                });
        }
    }


    return (
        <>  {showModal && <OpenAiKeyModal
            message_401={message_401}
            showModal={showModal}
            setShowModal={setShowModal}
            setError={setError} />}
            <div className='w-full flex justify-center pt-32 flex-col items-center'>
                <form onSubmit={(event) => handleOnsubmit(event)} className='justify-between bg-yellow-900 w-11/12 lg:w-1/2 rounded-sm flex'>
                    <input
                        type="text"
                        ref={searchRef}
                        placeholder="Which type of movies you want to see..." className='w-full text-sm md:text-lg px-2 outline-none md:m-2 rounded-sm bg-transparent placeholder:text-white focus:hover:bg-yellow-700' />
                    <button className='py-3 md:py-4 px-5 md:px-10 font-bold md:text-lg bg-yellow-800 rounded-sm tracking-wide hover:bg-yellow-700 disabled:bg-opacity-60 disabled:bg-yellow-950 disabled:cursor-not-allowed'
                        disabled={loading}>
                        {loading ? 'searching' : 'search'}
                        {
                            user?.openAiKey === null &&
                            <p className='text-xs text-nowrap'>Limit: {user?.searchLimit}</p>
                        }
                    </button>
                </form>
                {Error && <LimitExpire error={Error} />}
            </div>
        </>

    )
}
