import axios from "axios";

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'cd8faef5c9b47fd260a88b5671d77162',
        language: 'es-ES'
    }
})

export default movieDB;
