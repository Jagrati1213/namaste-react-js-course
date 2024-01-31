import { Openai } from "../openai";
import { getMovieDetail } from "./getMovieDetail";

/**
 * A function Fetch the gives movie suggestion based on the search query.
 * @params searchValue : A function take search query as parameter for run the openai query.
 * @returns movieResults, movieNames : A function return movies result and movies name.
 * 
 * */
export const getTmdbRecommendation = async (searchValue) => {

    // Set more information to get efficient result
    const gptQuery = `Act as a movie recommendation system and suggest some movies for the query : ${searchValue}. Only give me 5 movies, comma separated like a example : Koi Mil Gaya, Dhamaal, Dhol, Bhagam Bhaag, Don.`

    //  Make a api call for related query
    const gptQueryResult = await Openai.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery }],
        model: 'gpt-3.5-turbo',
    });

    // If no choices present
    if (!gptQueryResult?.choices[0]) return <h1>GPT, can't find anything...!!</h1>

    // Create Array of related movies name
    const gptSuggestMovieNames = gptQueryResult?.choices[0]?.message?.content.split(',');

    // //Return group of promises
    const moviesPromiseArray = gptSuggestMovieNames.map((movieName) => getMovieDetail(movieName));

    // Convert these promise into array
    const TmdbSuggestMovieResults = await Promise.all(moviesPromiseArray);

    return [TmdbSuggestMovieResults, gptSuggestMovieNames];
}