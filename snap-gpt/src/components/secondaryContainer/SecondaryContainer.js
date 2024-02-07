import { MovieList } from "./MovieList"
import { useSelector } from "react-redux";
import MovieListSekeleton from '../skeletons/movieList/MovieListSekeleton';

export const SecondaryContainer = () => {

    // Get the state
    const { nowPlayingMovies, topRatedMovies, upComingMovies, loading } = useSelector((store) => store.movies);

    // Add Loader
    if (loading.nowPlaying && nowPlayingMovies?.length === 0) return <MovieListSekeleton />
    if (loading.topRated && topRatedMovies?.length === 0) return <MovieListSekeleton />
    if (loading.upComing && upComingMovies?.length === 0) return <MovieListSekeleton />

    return (
        <div className="bg-black text-white">
            <div className="relative z-10 2xl:-mt-52">
                < MovieList title={'Now Playing'} movies={nowPlayingMovies} />
                < MovieList title={'Top Rated'} movies={topRatedMovies} />
                < MovieList title={'Upcoming'} movies={upComingMovies} />
            </div>
        </div >
    )
}