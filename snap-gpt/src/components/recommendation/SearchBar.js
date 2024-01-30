import React from 'react'
import { useSelector } from 'react-redux';
import { langConstant } from '../../utils/langConstant'

export const SearchBar = () => {

    const config = useSelector((store) => store.config);

    // Function run after form submit
    const handleOnsubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className='w-full flex justify-center'>
            <form onSubmit={(event) => handleOnsubmit(event)} className='justify-between gap-5 bg-yellow-900 w-1/2 rounded-sm grid grid-cols-12'>
                <input type="text" placeholder={langConstant?.[config.lang].gptPlaceHolder} className='col-span-9 text-lg py-3 px-2 outline-none m-2 rounded-sm bg-transparent placeholder:text-white' />
                <button className='col-span-3 py-4 px-10 font-bold text-lg bg-yellow-800 hover:bg-yellow-700 rounded-sm tracking-wide'>{langConstant?.[config.lang].search}</button>
            </form>
        </div>
    )
}
