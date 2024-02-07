import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovieDetails } from "../redux/slice/MovieSlice";
import { getMovieDetail } from "../helper/getMovieDetail";
/**
*  A function that fetch given movie name details from TMDB movie search API.
* store into movie state
*
* @param movieName : A function that receives the movieName, that responsible for giving result movies details.
*/
export const useGetMovieDetails = (movieName) => {

    const dispatch = useDispatch();

    // Function to fetch TMDB data && set into store
    const getDetail = async () => {
        const data = await getMovieDetail(movieName);
        const singleMovieDetails = data.find((item) => item?.original_title === movieName);

        // store state
        dispatch(addMovieDetails(singleMovieDetails));
    }

    // Called method after component mount
    useEffect(() => {
        getDetail();
    }, [movieName]);
}