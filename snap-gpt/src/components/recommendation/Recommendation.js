import { MovieSuggestList } from "./MovieSuggestList"
import { SearchBar } from "./SearchBar"

export const Recommendation = () => {
    return (
        <div className="min-h-screen text-white relative flex flex-col gap-10">
            <SearchBar />
            <MovieSuggestList />
        </div>
    )
}