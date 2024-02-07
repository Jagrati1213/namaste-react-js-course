import React from 'react'

export const LimitExpire = ({ error }) => {
    return (
        <div id="modal" className="w-full mt-20 flex items-center justify-center bg-transparent">
            <p className='md:text-xl font-bold bg-gray-900 bg-opacity-65 p-5 mx-5'>{error}</p>
        </div>
    )
}
