import { useState, useEffect } from 'react';
import { Cast, CreditsResponse, MovieFull } from '../interfaces/movieInterfaces';
import movieDB from '../api/movieDB';



interface MovieDetails {

    cast: Cast[];
    isLoading: boolean;
    movieFull?: MovieFull
}

export const useMovieDetails = (movieId: number) => {

    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast: []
    })


    const getMovieDetails = async() =>  {
        const movieDetailsPromise = movieDB.get<MovieFull>(`/${movieId}`)
        const CastPromise = movieDB.get<CreditsResponse>(`/${movieId}/credits`)
        
        const [ movieDetailsResp, castPromiseResp ] = await Promise.all([movieDetailsPromise, CastPromise])

        setState({
            isLoading: false,
            movieFull: movieDetailsResp.data,
            cast: castPromiseResp.data.cast
        })
    }

    useEffect(() => {
        getMovieDetails()
    }, [])

  return {
    ...state
  }
}
