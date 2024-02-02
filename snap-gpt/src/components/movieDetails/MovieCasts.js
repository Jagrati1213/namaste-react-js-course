import React from 'react'
import { TMDB_IMAGE_URL } from '../../utils/Constant';

export const MovieCasts = ({ casts }) => {
    return (
        <div className={`flex w-full overflow-x-scroll gap-4 my-10 pb-5 text-white px-2`}>
            {casts.map((actor) => (
                <div
                    key={actor.id}
                    className="cursor-pointer hover:bg-gray-800 p-2 rounded-sm shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                    <img
                        src={`${TMDB_IMAGE_URL}/${actor?.profile_path}`}
                        alt={actor?.name}
                        className="w-full h-40 md:h-52 object-cover rounded-sm" />
                    <div className="flex mt-2 flex-col whitespace-nowrap">
                        <p className="text-green-400 font-semibold text-lg">{actor?.name}</p>
                        <p className="text-white">{actor?.character}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
