import React from 'react'
import { useGetNowPlayingMovies } from '../../utils/hooks/useGetNowPlayingMovies';
import { useGetTopRatedMovie } from '../../utils/hooks/useGetTopRatedMovie';
import { useGetUpComingMovies } from '../../utils/hooks/useGetUpComingMovies';
import { Outlet } from 'react-router-dom';

function Browse() {

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