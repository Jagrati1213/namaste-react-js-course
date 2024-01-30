import { MovieList } from "./MovieList"
import { useSelector } from "react-redux";

export const SecondaryContainer = () => {

    // Get the state
    const { nowPlayingMovies, topRatedMovies, upComingMovies } = useSelector((store) => store.movies);

    // If they not present return;
    if (!nowPlayingMovies && !topRatedMovies && !upComingMovies) return;

    return (
        <div className="bg-black text-white">
            <div className="relative z-10 -mt-52">
                < MovieList title={'Now Playing'} movies={nowPlayingMovies} />
                < MovieList title={'Top Rated'} movies={topRatedMovies} />
                < MovieList title={'Upcoming'} movies={upComingMovies} />
            </div>

        </div >
    )
}