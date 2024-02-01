import { VideoBackground } from "./VideoBackground"
import { VideoTitle } from "./VideoTitle"

export const MainContainer = ({ original_title, overview, id }) => {

    return (
        <div className="text-white w-full h-full overflow-hidden bg-black relative">
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieID={id} />
        </div>
    )
}