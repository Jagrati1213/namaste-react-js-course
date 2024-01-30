import React from 'react'
import { useSelector } from 'react-redux'
import { useGetNowPlayingMovies } from '../../utils/hooks/useGetNowPlayingMovies';
import { MainContainer } from '../mainContainer/MainContainer';
import { SecondaryContainer } from '../secondaryContainer/SecondaryContainer';
import { useGetTopRatedMovie } from '../../utils/hooks/useGetTopRatedMovie';
import { useGetUpComingMovies } from '../../utils/hooks/useGetUpComingMovies';

function Browse() {

    const user = useSelector((store) => store.user);
    // Called the method
    useGetNowPlayingMovies();
    useGetTopRatedMovie();
    useGetUpComingMovies();

    return (
        <div>
            <MainContainer />
            <SecondaryContainer />
        </div>
    )
}

export default Browse