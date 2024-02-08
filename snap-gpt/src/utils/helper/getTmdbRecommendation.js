import { AES, enc } from "crypto-js";
import { Openai } from "../openai";
import { getMovieDetail } from "./getMovieDetail";
import OpenAI from 'openai';

/**
 * A function use to fetch data with the help of GPT & gives suggested Movies based on the search query.
 * @param searchValue - A value to get movies data.
 * @param user - A user to check validity of their OpenAi Key.
 * @return `movieResults` & `movieNames` : Returns fetched movies result and name.
 * 
 * */
export const getTmdbRecommendation = async (searchValue, user = null) => {

    // Set query
    const gptQuery = `Act as a movie recommendation system and suggest some movies for the query : ${searchValue}. Only give me 5 movies, comma separated like a example : Koi Mil Gaya, Dhamaal, Dhol, Bhagam Bhaag, Don.`

    //  Make a api call 
    const decryptedText = user?.openAiKey && AES.decrypt(user?.openAiKey, process.env.REACT_APP_SECRET_KEY).toString(enc.Utf8);

    const userOpenai = new OpenAI({
        apiKey: decryptedText,
        dangerouslyAllowBrowser: true
    });
    let gptQueryResult = null;

    // Check User openAi key
    user?.openAiKey === null ?
        gptQueryResult = await Openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        })
        : gptQueryResult = await userOpenai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });

    // If no choices present
    if (!gptQueryResult?.choices[0]) return <h1>GPT, can't find anything...!!</h1>

    // Create Array of related movies name
    const gptSuggestMovieNames = gptQueryResult?.choices[0]?.message?.content.split(',');

    // Return group of promises
    const moviesPromiseArray = gptSuggestMovieNames.map((movieName) => getMovieDetail(movieName));

    // Convert promises into array
    const TmdbSuggestMovieResults = await Promise.all(moviesPromiseArray);

    return [TmdbSuggestMovieResults, gptSuggestMovieNames];
}