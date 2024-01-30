export const FILM_CHICKS_BACKGROUND_IMG = 'https://png.pngtree.com/background/20230616/original/pngtree-wall-of-movie-posters-on-display-picture-image_3620105.jpg';

export const FILM_CHICKS_AVTAR_IMG = 'https://i.pinimg.com/originals/34/62/d2/3462d27440aa255b1c314ff16f4032b4.png';

export const TMDB_IMAGE_URL = 'https://image.tmdb.org/t/p/w200'
export const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: process.env.REACT_APP_API_OPTIONS_AUTH_TOKEN
    }
};