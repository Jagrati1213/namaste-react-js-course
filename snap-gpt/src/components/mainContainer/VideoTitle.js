import { FaPlay, FaInfoCircle } from "react-icons/fa";

export const VideoTitle = ({ title, overview }) => {
    return (
        <div className="absolute w-screen aspect-video pt-[20%] px-6 md:px-12 bg-gradient-to-r from-black">
            <h1 className="text-3xl md:text-5xl font-bold my-4 w-full md:w-1/2">{title}</h1>
            <p className="text-base md:text-lg my-4 w-full md:w-1/2">{overview}</p>
            <div className="flex gap-3">
                <button className=" bg-green-600 px-10 py-2 font-semibold rounded-sm hover:bg-green-400 flex items-center gap-2">
                    <FaPlay /> Play
                </button>
                <button className=" bg-gray-600 px-10 py-2 font-semibold rounded-sm hover:bg-gray-500 flex items-center gap-2">
                    <FaInfoCircle />More Info
                </button>
            </div>
        </div>)
}