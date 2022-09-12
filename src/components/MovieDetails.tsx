import React from 'react';
import { Text, View, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {MovieFull, Cast} from '../interfaces/movieInterfaces';
import currencyFormatter from 'currency-formatter';
import { CastItem } from './CastItem';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails = ({cast, movieFull}: Props) => {
  return (
    <>
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star-outline" color="grey" size={16} />
          <Text> {movieFull.vote_average}</Text>
          <Text style={{marginLeft: 5}}>- {movieFull.genres.map(g => g.name).join(', ')}</Text>
        </View>
        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
            Historia
        </Text>
        <Text style={{fontSize: 16}}>
            {movieFull.overview}
        </Text>

        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
            Presupuesto
        </Text>
        <Text style={{fontSize: 18}}>
            {currencyFormatter.format(movieFull.budget, {code: 'USD'})}
        </Text>
        <View style={{marginTop: 10, marginBottom: 100}}>
            <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold', marginHorizontal: 20}}>
                Actores
            </Text>
            <FlatList
            style={{marginTop: 10}}
            data={cast}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item})=> <CastItem actor={item}/> }
            horizontal
            showsHorizontalScrollIndicator={false}
            />
        </View>
      </View>
    </>
  );
};
