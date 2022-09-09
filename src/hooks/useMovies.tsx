import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {MovieDBNowPlaying, Movie} from '../interfaces/movieInterfaces';

export const useMovies = () => {
  const [peliculasEnCine, setPeliculasEnCine] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true)

  const getMovies = async () => {
    const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing');
    setPeliculasEnCine(resp.data.results);
    setIsLoading(false)
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    peliculasEnCine,
    isLoading,
  };
};
