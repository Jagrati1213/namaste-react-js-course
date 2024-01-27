import React from 'react'
import { useSelector } from 'react-redux'
import { useGetNowPlayingMovies } from '../../utils/hooks/useGetNowPlayingMovies';

function Browse() {

    const user = useSelector((store) => store.user);
    // Called the method
    useGetNowPlayingMovies();

    return (
        <div className='text-white'>{user?.displayName}</div>
    )
}

export default Browse