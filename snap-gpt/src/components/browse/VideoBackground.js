import { useSelector } from "react-redux";
import { useGetMoviesTrailer } from "../../utils/hooks/useGetMoviesTrailer"

export const VideoBackground = ({ movieID }) => {

    // Call the custom hook for fetch the video
    useGetMoviesTrailer(movieID);

    const trailerVideo = useSelector((store) => store.movies.trailerVideo);

    // early return 
    if (!trailerVideo) return;

    return <div className="w-screen">
        <iframe
            className="w-screen aspect-video"
            src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1`} title={trailerVideo?.name} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
}