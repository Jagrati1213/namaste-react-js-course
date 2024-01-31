import { API_OPTIONS } from "../Constant"

/**
*  A function that fetch given movie name details from TMDB movie search API, 
* and set the fetched data into gpt's Redux store.
*
* @params movieName : A function that receives the movieName, that responsible for giving result movies details.
* @return result : A function return the collection of related search movie.
 */
export const getResultOfTmdbSearchMovie = async (movieName) => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&page=1`, API_OPTIONS);
    const json = await response.json();
    console.log(json?.results);
    return json?.results;
}
