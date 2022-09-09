import {
  ActivityIndicator,
  Dimensions,
  View,
} from 'react-native';
import React from 'react';
// import { useNavigation } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMovies } from '../hooks';
import { MoviePoster } from '../components';
import Carousel from 'react-native-snap-carousel';

const {width: windowWith}  = Dimensions.get('window');




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
      <View style={{height: 440}}>
        <Carousel
          data={peliculasEnCine}
          renderItem={({item }: any) => <MoviePoster movie={item}/>}
          itemWidth={300}
          sliderWidth={windowWith}
        />
      </View>
    </View>
  );
};
