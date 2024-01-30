import { FILM_CHICKS_BACKGROUND_IMG } from "../../utils/Constant"
import { MovieSuggest } from "./MovieSuggest"
import { SearchBar } from "./SearchBar"

export const Recommendation = () => {
    return (
        <div className="bg-black pt-32 min-h-screen text-white flex flex-col gap-10">
            <SearchBar />
            <MovieSuggest />
        </div>
    )
}