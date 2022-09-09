import {
  ActivityIndicator,
  View,
} from 'react-native';
import React from 'react';
// import { useNavigation } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMovies } from '../hooks';
import { MoviePoster } from '../components';

export const HomeScreen = () => {
  // const navigation = useNavigation();

  const {peliculasEnCine, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();


  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }
  return (
    <View style={{marginTop: top + 20}}>
      <MoviePoster movie={peliculasEnCine[6]}/>
    </View>
  );
};
