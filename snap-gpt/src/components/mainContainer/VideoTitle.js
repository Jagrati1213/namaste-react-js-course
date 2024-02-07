import { useGetDimensions } from "../../utils/hooks/useGetDimensions";

export const VideoTitle = ({ title, overview }) => {

    const { width } = useGetDimensions();

    return (
        <div className="absolute flex flex-col md:items-start items-center w-screen h-full aspect-video justify-center px-6 md:px-12 md:pt-0 pt-10 bg-gradient-to-r from-black">
            <h1 className="text-[1.45rem] sm:text-3xl lg:text-5xl font-bold my-4 w-full lg:w-1/2">{title}</h1>
            <p className="text-sm 2xl:text-lg md:my-4 w-full lg:w-1/2 inline-block">
                {width >= 600 ? `${overview}` : `${overview.slice(0, 150) + '...'}`}
            </p>
        </div>)
}