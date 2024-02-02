import { API_OPTIONS } from "../Constant"

/**
*  A function that fetch given movie id related similar movies from TMDB movie similar API.
*
* @params movieId : A function that receives the movieName, that responsible for giving result movies details.
* @return result : A function return the movie casts.
*/

export const getSimilarMovies = async (movieId) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=1`, API_OPTIONS);
    const data = await response.json();
    return data?.results;
}