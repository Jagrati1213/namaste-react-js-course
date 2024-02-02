import React from 'react';
import { MainContainer } from '../mainContainer/MainContainer';
import { useSelector } from 'react-redux';
import { MovieCasts } from './MovieCasts';
import { MovieList } from '../secondaryContainer/MovieList';

export const MovieDetails = () => {
    const { movie, casts, similarMovies } = useSelector((store) => store.movies.movieDetails);
    if (!movie || !casts) return;
    return (
        <div className='text-white w-full my-4 px-4'>
            {/* mainContainer */}
            <MainContainer original_title={movie?.original_title} overview={movie?.overview} id={movie?.id} />
            {
                casts.length > 0 && casts[0]?.profile_path && <>
                    {/* Movie Casts */}
                    <div className='text-lg md:text-2xl font-bold px-2 mt-3'>
                        <h1>Casts</h1>
                    </div>
                    <MovieCasts casts={casts} />
                </>
            }

            {/* Similar movies */}
            <MovieList title={'Customers also watched'} movies={similarMovies} />
        </div>
    )
}
