import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  ScrollView,
  View,
} from 'react-native';
import React from 'react';
// import { useNavigation } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMovies } from '../hooks';
import { HorizonalSlider, MoviePoster } from '../components';
import Carousel from 'react-native-snap-carousel';
import { Text } from 'react-native';

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
    <ScrollView>
      <View style={{marginTop: top + 20}}>
        <View style={{height: 440}}>
          <Carousel
            data={peliculasEnCine}
            renderItem={({item }: any) => <MoviePoster movie={item}/>}
            itemWidth={300}
            sliderWidth={windowWith}
            inactiveSlideOpacity={0.9}
          />
        </View>
        {/* PELICULAS POPULARES */}
        <HorizonalSlider movies={peliculasEnCine} title='Peliculas en cine'/>
      </View>
    </ScrollView>
  );
};
