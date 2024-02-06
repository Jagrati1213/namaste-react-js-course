import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { langConstant } from '../../utils/langConstant'
import { addGptSearch } from '../../utils/redux/slice/GptSlice';
import { getTmdbRecommendation } from '../../utils/helper/getTmdbRecommendation';
import { OpenAiKeyModal } from './OpenAiKeyModal';
import { addUser, selectUserState } from '../../utils/redux/slice/UserSlice';
import { doc, updateDoc } from "firebase/firestore";
import { firestore } from '../../utils/firebase/Firebase';
import { getFirebaseStoreDoc } from '../../utils/helper/getFirebaseStoreDoc';
import { LimitExpire } from '../error/LimitExpire';

export const SearchBar = () => {

    const config = useSelector((store) => store.config);
    const user = useSelector(selectUserState);
    const [searchText, setSearchText] = useState('search');
    const [showModal, setShowModal] = useState(false);
    const [Error, setError] = useState(null);
    const searchRef = useRef();
    const dispatch = useDispatch();


    // Function run after form submit
    const handleOnsubmit = async (e) => {
        // Make onload none
        e.preventDefault();
        const userRef = doc(firestore, "users", user?.uid);

        // Get TMDB data from the method
        if (searchRef.current.value === '') return alert("Enter which type of movie you want to see");

        setSearchText("searching...");

        // Logic to check user search Limit
        if (user?.searchLimit > 0 && user?.openAiKey == null) {

            await updateDoc(userRef, {
                searchLimit: user?.searchLimit - 1,
            });
            const docData = await getFirebaseStoreDoc(user?.uid);
            dispatch(addUser({ ...user, searchLimit: docData?.searchLimit }));

            getTmdbRecommendation(searchRef.current.value)
                .then((data) => dispatch(addGptSearch({ moviesName: data[1], moviesResult: data[0] })))
                .catch((error) => {
                    if (error.status == 429) setError(error.message)
                    if (error.status == 401) setError(error.message);
                });
        }
        else {
            if (user?.openAiKey === null) setShowModal(true);
            else {
                //Logic for update open ai key 
                await updateDoc(userRef, {
                    openAiKey: user?.openAiKey,
                });

                const docData = await getFirebaseStoreDoc(user?.uid);
                dispatch(addUser({ ...user, openAiKey: docData?.openAiKey }));

                getTmdbRecommendation(searchRef.current.value)
                    .then((data) => dispatch(addGptSearch({ moviesName: data[1], moviesResult: data[0] })))
                    .catch((error) => {
                        if (error.status == 429) setError(error.message)
                        if (error.status == 401) setError(error.message)
                    });
            }

        }

        setSearchText('search');
    }


    return (
        <>  {showModal && <OpenAiKeyModal showModal={showModal} setShowModal={setShowModal} />}
            <div className='w-full flex justify-center pt-32 flex-col items-center'>
                <form onSubmit={(event) => handleOnsubmit(event)} className='justify-between bg-yellow-900 w-11/12 lg:w-1/2 rounded-sm flex'>
                    <input type="text" ref={searchRef} placeholder={langConstant?.[config.lang].gptPlaceHolder} className='w-full text-sm md:text-lg px-2 outline-none md:m-2 rounded-sm bg-transparent placeholder:text-white focus:hover:bg-yellow-700' />
                    <button className='py-3 md:py-4 px-5 md:px-10 font-bold md:text-lg bg-yellow-800 hover:bg-yellow-700 rounded-sm tracking-wide'>
                        {searchText}
                        <p className='text-xs text-nowrap'>Limit: {user?.searchLimit}</p>
                    </button>
                </form>
                <LimitExpire error={Error} />
            </div>
        </>

    )
}
