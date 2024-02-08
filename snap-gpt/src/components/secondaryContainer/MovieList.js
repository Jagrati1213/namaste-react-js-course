import React from 'react'
import { MovieCard } from './MovieCard';
import { Link } from 'react-router-dom';

function MovieList({ title, movies }) {
    // Guard clause
    if (movies?.length === 0) return;
    return (
        <div className='px-4 md:px-2'>
            <div className='py-10 text-lg md:text-2xl font-bold'>
                <h1>{title}</h1>
            </div>
            <div className={`flex ${movies?.length > 4 ? 'overflow-x-scroll' : ''} overflow-y-hidden gap-4`}>
                {
                    movies?.map((movie) => {
                        return <Link key={movie?.id} to={`/browse/${movie?.id}/${movie?.original_title}`}>
                            <MovieCard imageUrl={movie?.poster_path} />
                        </Link>
                    })
                }
            </div>
        </div>
    )
}

export { MovieList };