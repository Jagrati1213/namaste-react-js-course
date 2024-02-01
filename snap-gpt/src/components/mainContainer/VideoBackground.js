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
            className="w-[50rem] md:w-screen aspect-video h-full"
            src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&loop=1&playlist=${trailerVideo?.key}&showinfo=0`} title={trailerVideo?.name} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
}