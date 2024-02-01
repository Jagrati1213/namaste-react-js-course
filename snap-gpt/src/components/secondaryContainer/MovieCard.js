import React from 'react'
import { FILM_CHICKS_BACKGROUND_IMG, TMDB_IMAGE_URL } from '../../utils/Constant'

function MovieCard({ imageUrl }) {

    return (
        <div className='flex'>
            <div className='w-32 md:w-48 h-[200px] md:h-[275px] overflow-hidden'>
                {
                    !imageUrl ? <img src={FILM_CHICKS_BACKGROUND_IMG} alt={'dummy-images'} className='object-cover h-[270px] w-full' />
                        : <img src={TMDB_IMAGE_URL + imageUrl} alt={'movie-images'} className='object-cover h-[195px] md:h-[270px] w-full' />
                }
            </div>
        </div>
    )
}

export { MovieCard }