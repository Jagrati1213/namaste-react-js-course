import React from 'react'
import { CastCardSkeleton } from './CastCardSkeleton'

export const CastListSkeleton = () => {
    return (
        <>
            <h1 className="m-5 w-96 h-[20px] px-2 md:px-6 rounded-sm bg-[#bdbbbb8f] animate-pulse"></h1>
            <div className='flex w-max gap-4 px-2 md:px-6 bg-black bg-opacity-50 mt-3'>
                {
                    Array(4).fill(null).map((_, i) => {
                        return <CastCardSkeleton key={i} />
                    })
                }
            </div>
        </>
    )
}
