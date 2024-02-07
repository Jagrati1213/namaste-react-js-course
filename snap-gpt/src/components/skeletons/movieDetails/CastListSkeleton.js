import React from 'react'
import { CastCardSkeleton } from './CastCardSkeleton'

export const CastListSkeleton = () => {
    return (
        <div className='flex w-max gap-4 px-2 md:px-6 bg-black bg-opacity-50 mt-3'>
            {
                Array(4).fill(null).map((_, i) => {
                    return <CastCardSkeleton key={i} />
                })
            }
        </div>
    )
}
