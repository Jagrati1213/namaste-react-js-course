import React from 'react'
import { CastCardSkeleton } from './CastCardSkeleton'

export const CastListSkeleton = () => {
    return (
        <div className='flex w-max gap-4 mt-10'>
            {
                Array(4).fill(null).map((_, i) => {
                    return <CastCardSkeleton key={i} />
                })
            }
        </div>
    )
}
