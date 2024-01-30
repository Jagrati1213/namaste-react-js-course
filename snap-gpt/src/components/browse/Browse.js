import React from 'react'
import { useSelector } from 'react-redux'
import { useGetNowPlayingMovies } from '../../utils/hooks/useGetNowPlayingMovies';
import { MainContainer } from '../mainContainer/MainContainer';
import { SecondaryContainer } from '../secondaryContainer/SecondaryContainer';

function Browse() {

    const user = useSelector((store) => store.user);
    // Called the method
    useGetNowPlayingMovies();

    return (
        <div>
            <MainContainer />
            <SecondaryContainer />
        </div>
    )
}

export default Browse