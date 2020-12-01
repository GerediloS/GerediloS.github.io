const BASE_URL_API = 'https://api.themoviedb.org/3';
const API_KEY = 'c762aab08c96ec07acb339ec6c5af4f4';
const BASE_URL_IMAGES = 'https://image.tmdb.org/t/p';
const IMAGE_SIZE_W300 = "w300";
const IMAGE_SIZE_W780 = "w780";
const IMAGE_SIZE_W1280 = "w1280";
const IMAGE_SIZE_ORIGINAL = "original";
const MESSAGE_ERROR = 'Ocorreu um erro inesperado. Tente novamente mais tarde.';

async function getPopularMovies(page) {
    page = page ? page : 1;
    try {
        return await $.ajax({
            url: `${BASE_URL_API}/movie/now_playing`,
            data: {
                api_key: API_KEY,
                page: page,
                language: 'pt-Br'
            }
        });
    } catch (e) {
        alert(MESSAGE_ERROR);
    }       
}

async function getMovie(id) {
    try {
        return await $.ajax({
            url: `${BASE_URL_API}/movie/${id}`,
            data: {
                api_key: API_KEY,
                language: 'pt-Br'
            }
        });
    } catch (e) {
        alert(MESSAGE_ERROR);
    } 
}

async function searchMovies(search) {
    try {
        return await $.ajax({
            url: `${BASE_URL_API}/search/movie`,
            data: {
                api_key: API_KEY,
                query: search,
                language: 'pt-Br'
            }
        });
    } catch (e) {
        alert(MESSAGE_ERROR);
    }
}