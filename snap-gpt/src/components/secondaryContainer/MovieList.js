import React from 'react'
import { MovieCard } from './MovieCard';

function MovieList({ title, movies }) {

    if (!movies) return;

    return (
        <div className='px-4 md:px-10'>
            <div className='py-10 text-lg md:text-2xl font-bold'>
                <h1>{title}</h1>
            </div>
            <div className={`flex ${movies.length > 4 ? 'overflow-x-scroll' : ''} overflow-y-hidden gap-4`}>
                {
                    movies?.map((movie) => {
                        return <MovieCard key={movie?.id} imageUrl={movie?.poster_path} />
                    })
                }
            </div>
        </div>
    )
}

export { MovieList };