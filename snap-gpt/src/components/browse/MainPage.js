import React from 'react'
import { useSelector } from 'react-redux'
import { Recommendation } from '../recommendation/Recommendation';
import { MainContainer } from '../mainContainer/MainContainer';
import { SecondaryContainer } from '../secondaryContainer/SecondaryContainer';

export const MainPage = () => {

    // Get Gpt from the store state
    const gpt = useSelector((store) => store.gpt);
    return (
        <>
            {
                gpt.showRecommendation === true ?
                    <Recommendation /> :
                    <>
                        <MainContainer />
                        <SecondaryContainer />
                    </>
            }
        </>


    )
}
