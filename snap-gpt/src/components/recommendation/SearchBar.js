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
    const [searchText, setSearchText] = useState('search');
    const [showModal, setShowModal] = useState(false);
    const [Error, setError] = useState(null);


    // Search Logic
    const handleOnsubmit = async (e) => {

        // stop auto submission
        e.preventDefault();

        // Create firebase Doc ref
        const userRef = doc(firestore, "users", user?.uid);

        // Check input field
        if (searchRef.current.value === '') return alert("Enter which type of movie you want to see");

        // Check search Limit
        if (user?.searchLimit > 0) {

            dispatch(setLoading(true));
            setSearchText('Searching..')

            // Update doc Limit
            await updateDoc(userRef, {
                searchLimit: user?.searchLimit - 1,
            });

            // Get doc && Update in store
            const docData = await getFirebaseStoreDoc(user?.uid);
            dispatch(addUser({ ...user, searchLimit: docData?.searchLimit }));

            // Get Search query data
            getTmdbRecommendation(searchRef.current.value, user)
                .then((data) => {
                    dispatch(addGptSearch({ moviesName: data[1], moviesResult: data[0] }))
                    dispatch(setLoading(false));
                    setSearchText('Search')
                })
                .catch((error) => {
                    if (error.status == 429) setError(error.message)
                });
        }
        else {
            user?.openAiKey === null ? setShowModal(true)
                : dispatch(setLoading(true));
            setSearchText('Searching..');

            getTmdbRecommendation(searchRef.current.value, user)
                .then((data) => {
                    dispatch(addGptSearch({ moviesName: data[1], moviesResult: data[0] }))
                    dispatch(setLoading(false));
                    setSearchText('Search')
                })
                .catch((error) => {
                    if (error.status == 429) setError(error.message)
                    if (error.status == 401) setShowModal(true);
                });
        }
    }


    return (
        <>  {showModal && <OpenAiKeyModal showModal={showModal} setShowModal={setShowModal} />}
            <div className='w-full flex justify-center pt-32 flex-col items-center'>
                <form onSubmit={(event) => handleOnsubmit(event)} className='justify-between bg-yellow-900 w-11/12 lg:w-1/2 rounded-sm flex'>
                    <input
                        type="text"
                        ref={searchRef}
                        placeholder="Which type of movies you want to see..." className='w-full text-sm md:text-lg px-2 outline-none md:m-2 rounded-sm bg-transparent placeholder:text-white focus:hover:bg-yellow-700' />
                    <button className='py-3 md:py-4 px-5 md:px-10 font-bold md:text-lg bg-yellow-800 rounded-sm tracking-wide hover:bg-yellow-700 disabled:bg-opacity-60 disabled:bg-yellow-950 disabled:cursor-not-allowed'
                        disabled={loading}>
                        {searchText}
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
