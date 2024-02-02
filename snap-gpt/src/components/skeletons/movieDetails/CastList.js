import React from 'react'
import { CastCardSkeleton } from './CastCardSkeleton'

export const CastList = () => {
    return (
        <div className='flex gap-4 mt-10 w-full overflow-x-scroll'>
            <CastCardSkeleton />
            <CastCardSkeleton />
            <CastCardSkeleton />
            <CastCardSkeleton />
        </div>
    )
}
