export const FILM_CHICKS_BACKGROUND_IMG = 'https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_large.jpg';

export const FILM_CHICKS_AVTAR_IMG = 'https://i.pinimg.com/originals/34/62/d2/3462d27440aa255b1c314ff16f4032b4.png';

export const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: process.env.REACT_APP_API_OPTIONS_AUTH_TOKEN
    }
};