import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { langConstant } from '../../utils/langConstant'
import { addGptSearch } from '../../utils/redux/slice/GptSlice';
import { getTmdbRecommendation } from '../../utils/helper/getTmdbRecommendation';


export const SearchBar = () => {

    const config = useSelector((store) => store.config);
    const searchRef = useRef();
    const dispatch = useDispatch();


    // Function run after form submit
    const handleOnsubmit = async (e) => {
        // Make onload none
        e.preventDefault();

        // Get TMDB data from the method
        if (searchRef.current.value === '') return alert("Enter want you want to see");
        const data = await getTmdbRecommendation(searchRef.current.value);

        // Set Into Store
        dispatch(addGptSearch({ moviesName: data[1], moviesResult: data[0] }));
    }
    return (
        <div className='w-full flex justify-center'>
            <form onSubmit={(event) => handleOnsubmit(event)} className='justify-between gap-5 bg-yellow-900 w-1/2 rounded-sm grid grid-cols-12'>
                <input type="text" ref={searchRef} placeholder={langConstant?.[config.lang].gptPlaceHolder} className='col-span-9 text-lg py-3 px-2 outline-none m-2 rounded-sm bg-transparent placeholder:text-white' />
                <button className='col-span-3 py-4 px-10 font-bold text-lg bg-yellow-800 hover:bg-yellow-700 rounded-sm tracking-wide'>{langConstant?.[config.lang].search}</button>
            </form>
        </div>
    )
}
