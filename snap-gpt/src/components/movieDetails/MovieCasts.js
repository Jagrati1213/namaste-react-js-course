import React from 'react'
import { TMDB_IMAGE_URL } from '../../utils/Constant';
import { CastList } from '../skeletons/movieDetails/CastList';

export const MovieCasts = ({ casts }) => {

    if (!casts) return <CastList />
    return (
        <div className={`flex overflow-x-scroll overflow-y-hidden gap-2`}>
            {casts.map((actor, index) => (
                actor.profile_path && <div
                    key={index}
                    className="cursor-pointer hover:bg-gray-800 p-2 rounded-sm shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                    <div className='w-32 md:w-36 h-[155px] md:h-[175px] overflow-hidden'>
                        <img
                            src={`${TMDB_IMAGE_URL}/${actor?.profile_path}`}
                            alt={actor?.name}
                            className='object-cover h-[150px] md:h-[170px] w-full ' />
                    </div>

                    <div className="flex mt-2 flex-col">
                        <p className="text-green-400 font-semibold text-base md:text-lg">{actor?.name}</p>
                        <p className="text-white text-xs md:text-base">{actor?.character}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
