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
import { GradientBackground, HorizonalSlider, MoviePoster } from '../components';
import Carousel from 'react-native-snap-carousel';
import ImageColors from 'react-native-image-colors'
import { getPosterColors } from '../helpers/getPosterColors';


const {width: windowWith}  = Dimensions.get('window');




export const HomeScreen = () => {
  // const navigation = useNavigation();

  const { nowPlaying, popular,topRated, upcoming, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();


  const getColors = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    const [primary, secondary] = await getPosterColors(uri)
    console.log({primary, secondary})
  }

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }
  return (
    <GradientBackground>
      <ScrollView>
        <View style={{marginTop: top + 20}}>
          <View style={{height: 440}}>
            <Carousel
              data={nowPlaying}
              renderItem={({item }: any) => <MoviePoster movie={item}/>}
              itemWidth={300}
              sliderWidth={windowWith}
              inactiveSlideOpacity={0.9}
              onSnapToItem={index => getColors(index)}
            />
          </View>
          {/* PELICULAS POPULARES */}
          <HorizonalSlider movies={popular} title='Popular'/>
          <HorizonalSlider movies={topRated} title='Top Rated'/>
          <HorizonalSlider movies={upcoming} title='Upcoming'/>
        </View>
      </ScrollView>
    </GradientBackground>
  );
};
