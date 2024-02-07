import React from 'react'
import { CastCardSkeleton } from './CastCardSkeleton'

export const CastListSkeleton = () => {
    return (
        <div className='flex flex-wrap gap-4 mt-10 w-full'>
            {
                Array(6).fill(null).map((_, i) => {
                    return <CastCardSkeleton key={i} />
                })
            }
        </div>
    )
}
