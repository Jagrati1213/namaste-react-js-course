import React from 'react'
import { TMDB_IMAGE_URL } from '../../utils/Constant'

function MovieCard({ imageUrl }) {

    return (
        <div>
            <div className='w-48'>
                <img src={TMDB_IMAGE_URL + imageUrl} alt={'movie-images'} />
            </div>
        </div>
    )
}

export { MovieCard }