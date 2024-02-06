import React from 'react'
import { useSelector } from 'react-redux'
import { MovieList } from '../secondaryContainer/MovieList';
import MovieListSekeleton from '../skeletons/movieList/MovieListSekeleton';

export const MovieSuggestList = () => {

    // Get state from store
    const { gptMoviesNames, gptMoviesResult } = useSelector((store) => store.gpt);

    if (gptMoviesResult?.length === 0) return <MovieListSekeleton />;

    return (
        <div className='px-2 md:px-6 bg-black bg-opacity-50'>
            {
                gptMoviesNames?.map((item, index) => < MovieList key={index} title={item} movies={gptMoviesResult[index]} />)
            }
        </div>
    )
}

