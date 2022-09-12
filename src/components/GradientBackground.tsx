import {Animated, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {GradientContext} from '../context/GradientContext';
import { useFade } from '../hooks';

interface Props {
  children: JSX.Element | JSX.Element[];
}
export const GradientBackground = ({children}: Props) => {
  const {colors, prevColors, setPreviousMainColors} = useContext(GradientContext);
  const { opacity, fadeIn, fadeOut} = useFade();
  
  useEffect(() => {
    fadeIn(() => {
      setPreviousMainColors(colors);
      fadeOut()
    })
  }, [colors])
  

  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={[prevColors.primary, prevColors.secondary, 'white']}
        start={{x: 0.1, y: 0.1}}
        end={{x: 0.5, y: 0.5}}
        style={{...StyleSheet.absoluteFillObject}}
      />
      <Animated.View
        style={{...StyleSheet.absoluteFillObject, opacity}}>
        <LinearGradient
          colors={[colors.primary, colors.secondary, 'white']}
          start={{x: 0.1, y: 0.1}}
          end={{x: 0.5, y: 0.5}}
          style={{...StyleSheet.absoluteFillObject}}
        />
      </Animated.View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({});
