import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../navigation/Navigation';


interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {

}
export const DetailScreen = ({navigation, route } : Props) => {


  const movie = route.params;

  console.log(movie.original_title)


  return (
    <View>
      <Text>DetailScreen</Text>
    </View>
  )
}


const styles = StyleSheet.create({})