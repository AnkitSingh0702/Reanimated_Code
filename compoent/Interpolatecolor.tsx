
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Switch } from 'react-native-gesture-handler';
import Animated, { interpolateColor, useAnimatedStyle, useDerivedValue, useSharedValue, withTiming } from 'react-native-reanimated';


const Colors ={
    dark:{
        background:'#1E1E1E',
        circle:'#E8E8E8',
        text:'#F8F8F8',
    },
    light:{
        background:'#F8F8F8',
        circle:'#E8E8E8',
        text:'#1E1E1E', 
    },
};

const SWITCH_TRACK_COLOR = {
    true:'rgba(137, 196, 244,0.5)',
    false:'rgba(0,0,0,0.1)',
}
type Theme = 'light'| 'dark'; 
export default function Interpolatecolor() {
  const[theme,setTheme] =useState<Theme>('light');
  // const progress = useSharedValue(0)
     const progress = useDerivedValue(() =>{
       return theme ==='dark' ? withTiming(1) :withTiming(0) 
     },[theme])
// For dark mode
  const rStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(progress.value, [0,1], [
      Colors.light.background, Colors.dark.background
    ])
    return{
      backgroundColor
    }
  })
// For circle
  const rcircleStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(progress.value, [0,1], [
      Colors.light.circle, Colors.dark.circle
    ])
    return{
      backgroundColor
    }
  });

  // FOR TEXT
  const rtextStyle = useAnimatedStyle(() => {
    const color = interpolateColor(progress.value, [0,1], [
      Colors.light.text, Colors.dark.text
    ]);
    return{
      color
    };
  }) ;
  return (
    <Animated.View style ={[styles.container,rStyle]}>
      <Animated.Text style = {[styles.text , rtextStyle]}>Theme</Animated.Text>
      <Animated.View style ={[styles.circle, rcircleStyle]}>
      <Switch value={theme === 'dark'} onValueChange={(toggled) =>{
        setTheme(toggled ? 'dark':'light')
      }}
      trackColor = {SWITCH_TRACK_COLOR}
      />
      </Animated.View>
      
    </Animated.View>
  )
}
const Size = Dimensions.get('window').width * 0.7
const styles = StyleSheet.create({
container:{
flex:1,
backgroundColor:'#fff',
justifyContent:'center',
alignItems:'center',
},
circle:{
width: Size,
height:Size,
backgroundColor:'#6dd5ed',
alignItems:'center',
justifyContent:'center',
borderRadius:Size/2,
elevation:8,
},
text:{
  fontSize:40,
  letterSpacing:5,
  marginBottom:25,
}
})