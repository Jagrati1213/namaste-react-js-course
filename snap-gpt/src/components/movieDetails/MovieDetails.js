import React from 'react';
import { MainContainer } from '../mainContainer/MainContainer';
import { useSelector } from 'react-redux';
import { MovieCasts } from './MovieCasts';
import { MovieList } from '../secondaryContainer/MovieList';
import { useParams } from 'react-router-dom';
import { useGetMovieDetails } from '../../utils/hooks/useGetMovieDetail';
import { useGetMovieCasts } from '../../utils/hooks/useGetMovieCast';
import { useGetSimilarMovies } from '../../utils/hooks/useGetSimilarMovies';
import { CastListSkeleton } from '../skeletons/movieDetails/CastListSkeleton';
import MovieListSekeleton from '../skeletons/movieList/MovieListSekeleton';

export const MovieDetails = () => {

    const { movie_id, movie_name } = useParams();
    const { movieDetails, casts, similarMovies, loading } = useSelector((store) => store.movies);

    useGetMovieDetails(movie_name);
    useGetMovieCasts(movie_id);
    useGetSimilarMovies(movie_id);

    if (!movieDetails) return;

    return (
        <div className='text-white w-full my-4 px-4'>
            {/* mainContainer */}
            <MainContainer
                original_title={movieDetails?.original_title}
                overview={movieDetails?.overview}
                id={movieDetails?.id} />

            {/* movieCast */}
            <h1 className='text-3xl text-white'>{!casts}</h1>
            {
                loading.casts ? <CastListSkeleton /> : <MovieCasts casts={casts} />
            }

            {/* similarMovies */}
            {
                loading.similarMovies ? <MovieListSekeleton /> : <MovieList title={'Customers also watched'} movies={similarMovies} />
            }
        </div>
    )
}
