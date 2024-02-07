import React from 'react'
import MovieCardSkeleton from './MovieCardSkeleton'

function MovieListSekeleton({ number = 5 }) {
    return (
        <div className='flex w-max gap-4 px-2 md:px-6 bg-black bg-opacity-50 mt-3'>
            {Array(number).fill(null).map((_, i) => {
                return <MovieCardSkeleton key={i} />
            })
            }
        </div>
    )
}

export default MovieListSekeleton