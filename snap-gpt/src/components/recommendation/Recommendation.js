import { FILM_CHICKS_BACKGROUND_IMG } from "../../utils/Constant"
import { MovieSuggestList } from "./MovieSuggestList"
import { SearchBar } from "./SearchBar"

export const Recommendation = () => {
    return (
        <div className="bg-black min-h-screen text-white relative flex flex-col gap-10 bg-no-repeat bg-fixed bg-cover bg-blend-screen"
            style={{ backgroundImage: `url(${FILM_CHICKS_BACKGROUND_IMG}) ` }}>
            <SearchBar />
            <MovieSuggestList />
        </div>
    )
}