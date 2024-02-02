import React from 'react';
import { MainContainer } from '../mainContainer/MainContainer';
import { useSelector } from 'react-redux';
import { MovieCasts } from './MovieCasts';
import { MovieList } from '../secondaryContainer/MovieList';
import { CastList } from '../skeletons/movieDetails/CastList';
import { useParams } from 'react-router-dom';
import { useGetMovieDetails } from '../../utils/hooks/useGetMovieDetail';
import { useGetMovieCasts } from '../../utils/hooks/useGetMovieCast';
import { useGetSimilarMovies } from '../../utils/hooks/useGetSimilarMovies';

export const MovieDetails = () => {

    const { movie_id, movie_name } = useParams();
    useGetMovieDetails(movie_name);
    useGetMovieCasts(movie_id);
    useGetSimilarMovies(movie_id);

    const { movieDetails, casts, similarMovies } = useSelector((store) => store.movies);
    if (!movieDetails) return;

    return (
        <div className='text-white w-full my-4 px-4'>
            {/* mainContainer */}
            <MainContainer
                original_title={movieDetails?.original_title}
                overview={movieDetails?.overview}
                id={movieDetails?.id} />

            {/* movieCast */}
            {
                casts?.length > 0 && <MovieCasts casts={casts} />
            }

            {/* similarMovies */}
            <MovieList title={'Customers also watched'} movies={similarMovies} />
        </div>
    )
}
