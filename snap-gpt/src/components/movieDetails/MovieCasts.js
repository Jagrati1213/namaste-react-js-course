import React from 'react'
import { CAST_DUMMY_IMAGE, TMDB_IMAGE_URL } from '../../utils/Constant';

export const MovieCasts = ({ casts }) => {

    if (casts?.length == 0) return;
    return (
        <>
            <div className='text-lg md:text-2xl font-bold px-2 mt-3'>
                <h1>Casts</h1>
            </div>
            <div className={`flex overflow-x-scroll overflow-y-hidden gap-2`}>
                {casts.map((actor, index) => (
                    <div
                        key={index}
                        className="cursor-pointer hover:bg-gray-800 p-2 rounded-sm shadow-md hover:shadow-lg transition duration-300 ease-in-out w-36 md:w-40">
                        <div className='w-32 md:w-36 h-[155px] md:h-[175px] bg-gray-900 overflow-hidden'>
                            <img
                                src={actor?.profile_path ? `${TMDB_IMAGE_URL}/${actor?.profile_path}` : `${CAST_DUMMY_IMAGE}`}
                                alt={actor?.name}
                                loading='lazy'
                                className='object-cover h-[150px] md:h-[170px] w-full ' />

                        </div>
                        <div className="flex mt-2 flex-col text-wrap">
                            <p className="text-green-400 font-semibold text-base md:text-lg">{actor?.name}</p>
                            <p className="text-white text-xs md:text-base">{actor?.character}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
