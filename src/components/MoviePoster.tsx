import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Movie} from '../interfaces/movieInterfaces';

interface Props {
  movie: Movie;
}
export const MoviePoster = ({movie}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  
  
  
  return (
    <View style={{width: 300, height: 420}}>
      <View style={styles.imageContainer}>
        <Image source={{uri}} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.29,
    shadowRadius: 7,

    elevation: 10,
  },
});