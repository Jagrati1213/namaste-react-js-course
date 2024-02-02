import React from 'react'
import { TMDB_IMAGE_URL } from '../../utils/Constant'

function MovieCard({ imageUrl }) {
    if (!imageUrl) return;
    return (
        <div className='flex'>
            <div className='w-32 md:w-48 h-[200px] md:h-[275px] overflow-hidden bg-gray-900'>
                <img src={TMDB_IMAGE_URL + imageUrl} alt={'movie-images'} className='object-cover h-[195px] md:h-[270px] w-full bg-gray-900' />
            </div>
        </div>
    )
}

export { MovieCard }