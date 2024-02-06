import { useEffect } from "react";
import { API_OPTIONS } from "../Constant"
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../redux/slice/MovieSlice";

/**
*  A function that fetch video's Trailer from TMDB API, 
* and set the fetched data into movie's Redux store.
*
* @param movieId : A function that receives the movieID, that responsible for fetching youtube key.
**/

export const useGetMoviesTrailer = (id) => {

    const dispatch = useDispatch();
    const trailerVideo = useSelector((store) => store.movies.trailerVideo);

    // Fetch the trailer 
    const getMovieVideo = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, API_OPTIONS);
        const data = await response.json();
        const FilterTrailer = data?.results?.find((video) => video.type === "Trailer");
        const trailer = !FilterTrailer ? (data?.results[0]) : FilterTrailer;

        // Condition resolve the overlapping of trailer video
        if (trailerVideo?.key !== trailer?.key) {
            dispatch(addTrailerVideo(trailer));
        }
    }

    // Render after the component mount
    useEffect(() => {
        getMovieVideo();
    }, [id])
}