import { Animated, Button, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import { useFade } from '../hooks'

export const FadeScreen = () => {
    const {fadeIn,fadeOut,opacity} = useFade()

  return (
    <View style={{
        flex: 1,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
      <Animated.View style={{
        backgroundColor: '#084F6A',
        width: 150,
        height: 150,
        borderColor: 'white',
        borderWidth: 10,
        marginBottom: 10,
        opacity
      }}>

      </Animated.View>

      <Button
      title='Fade in'
      onPress={fadeIn}
      />
      <Button
      title='Fade out'
      onPress={fadeOut}
      />
    </View>
  )
}

