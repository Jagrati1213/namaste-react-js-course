import React from 'react'
import MovieCardSkeleton from './MovieCardSkeleton'

function MovieListSekeleton() {
    return (
        <div className='flex flex-wrap gap-4 px-2 md:px-6 bg-black bg-opacity-50'>
            {Array(10).fill(null).map((_, i) => {
                return <MovieCardSkeleton key={i} />
            })
            }

        </div>
    )
}

export default MovieListSekeleton