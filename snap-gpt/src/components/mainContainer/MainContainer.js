import { useSelector } from "react-redux"
import { VideoBackground } from "./VideoBackground"
import { VideoTitle } from "./VideoTitle"

export const MainContainer = () => {
    const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);

    // early return
    if (!nowPlayingMovies) return;

    const mainMovie = nowPlayingMovies[0];
    const { original_title, overview, id } = mainMovie;

    return (
        <div className="text-white absolute top-0 h-full overflow-y-hidden">
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieID={id} />
        </div>
    )
}