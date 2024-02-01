import React from 'react'
import { useSelector } from 'react-redux'
import { MovieList } from '../secondaryContainer/MovieList';

export const MovieSuggestList = () => {

    // Get state from store
    const { gptMoviesNames, gptMoviesResult } = useSelector((store) => store.gpt);

    if (!gptMoviesNames || !gptMoviesResult) return null;

    return (
        <div className='px-2 md:px-6'>
            {
                gptMoviesNames?.map((item, index) => < MovieList key={index} title={item} movies={gptMoviesResult[index]} />)
            }

        </div>
    )
}

