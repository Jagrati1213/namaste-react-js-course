import { useSelector } from "react-redux";
import { useGetMoviesTrailer } from "../../utils/hooks/useGetMoviesTrailer"
import { FILM_CHICKS_BACKGROUND_IMG } from "../../utils/Constant";

export const VideoBackground = ({ movieID }) => {

    // Fetch the video Details
    useGetMoviesTrailer(movieID);

    // Get the trailerVideo
    const trailerVideo = useSelector((store) => store.movies.trailerVideo);

    return <div className="w-[50rem] md:w-screen aspect-video h-full text-white">
        {
            !trailerVideo
                ? <div className='w-[50rem] md:w-screen aspect-video h-full'>
                    <img src={FILM_CHICKS_BACKGROUND_IMG} alt="background" className='bg-black h-full w-full object-cover' />
                </div>
                : <iframe
                    className="w-[50rem] md:w-screen aspect-video h-full"
                    src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&loop=1&playlist=${trailerVideo?.key}&showinfo=0`} title={trailerVideo?.name} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        }
    </div>
}