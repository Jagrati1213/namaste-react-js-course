import React from 'react'
import { MovieCard } from './MovieCard';
import { Link } from 'react-router-dom';
import { getMovieDetail } from '../../utils/helper/getMovieDetail';
import { useDispatch } from 'react-redux';
import { addSingleMovieDetails } from '../../utils/redux/slice/MovieSlice';
import { getMovieCast } from '../../utils/helper/getMovieCast';
import { getSimilarMovies } from '../../utils/helper/getSimilarMovies';

function MovieList({ title, movies }) {

    const dispatch = useDispatch();
    if (!movies) return;

    // Get Single Movies details
    const getData = async (arr) => {
        const movies = await getMovieDetail(arr[0]);
        const casts = await getMovieCast(arr[1]);
        const similarMovies = await getSimilarMovies(arr[1]);

        // filter the related movie details and set into movies store 
        const singleMovieDetails = movies.find((item) => item?.original_title === arr[0]);
        dispatch(addSingleMovieDetails({ movie: singleMovieDetails, casts: casts, similarMovies: similarMovies }));
    }

    return (
        <div className='px-4 md:px-2'>
            <div className='py-10 text-lg md:text-2xl font-bold'>
                <h1>{title}</h1>
            </div>
            <div className={`flex ${movies.length > 4 ? 'overflow-x-scroll' : ''} overflow-y-hidden gap-4`}>
                {
                    movies?.map((movie) => {
                        return <Link key={movie?.id} to={`/browse/${movie?.id}`}
                            onClick={getData.bind(null, [movie?.original_title, movie?.id])}>
                            <MovieCard imageUrl={movie?.poster_path} />
                        </Link>
                    })
                }
            </div>
        </div>
    )
}

export { MovieList };