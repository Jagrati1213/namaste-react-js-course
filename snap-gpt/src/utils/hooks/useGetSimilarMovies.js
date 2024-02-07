import { useEffect } from "react";
import { API_OPTIONS } from "../Constant";
import { useDispatch } from "react-redux";
import { addSimilarMovies, setLoading } from "../redux/slice/MovieSlice";

/**
*  A function that fetch given movie id related similar movies from TMDB movie similar API.
* and store the similar movies 
* @param movieId : A function that receives the movieName, that responsible for giving result movies details.
*/

export const useGetSimilarMovies = (movieId) => {

    const dispatch = useDispatch();

    // Function to fetch TMDB data && set into store
    const getSimilarMovies = async () => {

        dispatch(setLoading({ dataKey: 'similarMovies', loadingState: true }))
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=1`, API_OPTIONS);
        const data = await response.json();
        dispatch(addSimilarMovies(data?.results));
        dispatch(setLoading({ dataKey: 'similarMovies', loadingState: false }))
    }
    // Called method after component mount
    useEffect(() => {
        getSimilarMovies();
    }, [movieId]);
}