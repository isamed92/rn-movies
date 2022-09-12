import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  ScrollView,
  View,
} from 'react-native';
import React, { useContext, useEffect } from 'react';
// import { useNavigation } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMovies } from '../hooks';
import { GradientBackground, HorizonalSlider, MoviePoster } from '../components';
import Carousel from 'react-native-snap-carousel';
import ImageColors from 'react-native-image-colors'
import { getPosterColors } from '../helpers/getPosterColors';
import { GradientContext } from '../context/GradientContext';


const {width: windowWith}  = Dimensions.get('window');




export const HomeScreen = () => {
  // const navigation = useNavigation();

  const { nowPlaying, popular,topRated, upcoming, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();

  const {setMainColors} = useContext(GradientContext)
  const getColors = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    const [primary='green', secondary='orange'] = await getPosterColors(uri)
    setMainColors({primary, secondary})

  }
  
  useEffect(() => {
    if(nowPlaying.length > 0 ) {
      getColors(0)
    }
  }, [nowPlaying])
  
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
