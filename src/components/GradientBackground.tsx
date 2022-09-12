import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';


interface Props {
    children: JSX.Element | JSX.Element[];
}
export const GradientBackground = ({ children}: Props) => {
  return (
    <View style={{flex: 1}}>
      <LinearGradient colors={['#084F6A', '#75CEDB', 'white']}
        start={{x: 0.1, y: 0.1}}
        end={{x: 0.5, y: 0.5}}
        style={{...StyleSheet.absoluteFillObject}}
      />
      {children}
    </View>
  )
}

const styles = StyleSheet.create({})