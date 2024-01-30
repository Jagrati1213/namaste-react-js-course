import React from 'react'
import { useSelector } from 'react-redux'
import { useGetNowPlayingMovies } from '../../utils/hooks/useGetNowPlayingMovies';
import { MainContainer } from '../mainContainer/MainContainer';
import { SecondaryContainer } from '../secondaryContainer/SecondaryContainer';
import { useGetTopRatedMovie } from '../../utils/hooks/useGetTopRatedMovie';
import { useGetUpComingMovies } from '../../utils/hooks/useGetUpComingMovies';
import { Recommendation } from '../recommendation/Recommendation';

function Browse() {

    // Get Gpt from the store state
    const gpt = useSelector((store) => store.gpt);

    // Called the method from movieSlice
    useGetNowPlayingMovies();
    useGetTopRatedMovie();
    useGetUpComingMovies();

    return (
        <div>
            {
                gpt.showRecommendation === true ?
                    <Recommendation /> :
                    <>
                        <MainContainer />
                        <SecondaryContainer />
                    </>
            }

        </div>
    )
}

export default Browse