import React from 'react'
import MovieCardSkeleton from './MovieCardSkeleton'

function MovieListSekeleton() {
    return (
        <div className={`flex flex-wrap gap-4`}>
            <MovieCardSkeleton />
            <MovieCardSkeleton />
            <MovieCardSkeleton />
            <MovieCardSkeleton />
            <MovieCardSkeleton />
            <MovieCardSkeleton />
        </div>
    )
}

export default MovieListSekeleton