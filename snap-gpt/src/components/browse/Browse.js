import React from 'react'
import { useSelector } from 'react-redux'
import { useGetNowPlayingMovies } from '../../utils/hooks/useGetNowPlayingMovies';
import { MainContainer } from '../mainContainer/MainContainer';
import { SecondaryContainer } from '../secondaryContainer/SecondaryContainer';
import { useGetTopRatedMovie } from '../../utils/hooks/useGetTopRatedMovie';
import { useGetUpComingMovies } from '../../utils/hooks/useGetUpComingMovies';
import { Recommendation } from '../recommendation/Recommendation';
import { Outlet } from 'react-router-dom';

function Browse() {

    // Get Gpt from the store state
    const gpt = useSelector((store) => store.gpt);

    // Called the method from movieSlice
    useGetNowPlayingMovies();
    useGetTopRatedMovie();
    useGetUpComingMovies();

    return (
        <div className='text-white'>
            <Outlet />
        </div>
    )
}

export default Browse