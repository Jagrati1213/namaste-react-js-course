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
            <form onSubmit={(event) => handleOnsubmit(event)} className='justify-between bg-yellow-900 w-11/12 lg:w-1/2 rounded-sm flex'>
                <input type="text" ref={searchRef} placeholder={langConstant?.[config.lang].gptPlaceHolder} className='w-full text-sm md:text-lg px-2 outline-none md:m-2 rounded-sm bg-transparent placeholder:text-white focus:hover:bg-yellow-700' />
                <button className='py-3 md:py-4 px-5 md:px-10 font-bold md:text-lg bg-yellow-800 hover:bg-yellow-700 rounded-sm tracking-wide'>{langConstant?.[config.lang].search}</button>
            </form>
        </div>
    )
}
