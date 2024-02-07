import { useEffect } from "react";
import { API_OPTIONS } from "../Constant";
import { useDispatch } from "react-redux";
import { addCasts, setLoading } from "../redux/slice/MovieSlice";

/**
*  A function that fetch given movie id cast from TMDB movie credits API.
* And store the movie casts.
* @param movieId : A function that receives the movieName, that responsible for giving result movies details.
*/

export const useGetMovieCasts = (movieId) => {

    const dispatch = useDispatch();

    // Function to fetch TMDB data && set into store
    const getMovieCast = async () => {

        dispatch(setLoading({ dataKey: 'casts', loadingState: true }));

        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`, API_OPTIONS);
        const data = await response.json();
        const popularCast = data?.cast?.filter((cast) => cast?.popularity >= 30);

        // store state
        dispatch(addCasts(popularCast));
        dispatch(setLoading({ dataKey: 'casts', loadingState: false }));

    }
    // Called method after component mount
    useEffect(() => {
        getMovieCast();
    }, [movieId]);
}