import { API_OPTIONS } from "../Constant"

/**
*  A function that fetch given movie id cast from TMDB movie credits API.
*
* @params movieId : A function that receives the movieName, that responsible for giving result movies details.
* @return result : A function return the movie casts.
*/

export const getMovieCast = async (movieId) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`, API_OPTIONS);
    const data = await response.json();
    return data?.cast;
}