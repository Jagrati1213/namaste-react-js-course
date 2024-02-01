import React from 'react'
import { useSelector } from 'react-redux'
import { Recommendation } from '../recommendation/Recommendation';
import { MainContainer } from '../mainContainer/MainContainer';
import { SecondaryContainer } from '../secondaryContainer/SecondaryContainer';

export const MainPage = () => {

    // Get Gpt from the store state
    const gpt = useSelector((store) => store.gpt);
    const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);

    // early return
    if (!nowPlayingMovies) return;

    const mainMovie = nowPlayingMovies[0];
    const { original_title, overview, id } = mainMovie;

    return (
        <>
            {
                gpt.showRecommendation === true ?
                    <Recommendation /> :
                    <>
                        <MainContainer original_title={original_title} overview={overview} id={id} />
                        <SecondaryContainer />
                    </>
            }
        </>


    )
}
