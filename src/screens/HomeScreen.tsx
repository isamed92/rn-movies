import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
// import { useNavigation } from '@react-navigation/native'
import {useMovies} from '../hooks/useMovies';

export const HomeScreen = () => {
  // const navigation = useNavigation();

  const {peliculasEnCine, isLoading} = useMovies();


  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }
  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>

      {/* <Button title='Ir a detalle' onPress={()=> navigation.navigate('DetailScreen') } /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
