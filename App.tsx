//Introduction to reanimated 
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Interpolate from './compoent/Interpolate';
import Animated ,{ useSharedValue, useAnimatedStyle, withTiming, withSpring, withRepeat, interpolate } from 'react-native-reanimated';
import PinchH from './compoent/PinchH';
import PanGesture from './compoent/PanGesture';
import Doubletap from './compoent/Doubletap';
import CircularProgress from './compoent/CircularProgress';
import ColorPickerMain from './compoent/Colorpickermain';
// import Interpolatecolor from './compoent/Interpolatecolor';

// const size =100.0
// const handleRotation = (progress: Animated.SharedValue<number>) => {
// 'worklet' ;
  
//   return `${progress.value * 2*Math.PI}rad`
// }
export default function App() {
// const progress = useSharedValue(1) // the value may be boolean,string
// const scale = useSharedValue (2);

// const reanimated = useAnimatedStyle(() => {
//   return{
//     opacity: progress.value,
//     borderRadius: (progress.value * 50),
//     transform: [{scale:scale.value}, 
//     {rotate:handleRotation (progress)}] 
//   };
// }, []);
// // {rotate: `${progress.value * 2*Math.PI}rad`} THIS LINE IS USED ROTATE THE ANIMATION

// useEffect(() => {
//   progress.value = withRepeat( withSpring(0.3),-1,true);
//   scale.value = withRepeat(withSpring (1),-1, true) ;
// }, [])

  
  return (
    <>

    {/* <Interpolate/> */}
    {/* <Interpolatecolor/> */}
    {/* <PinchH/> */}
    {/* <PanGesture/> */}
    {/* <Doubletap/> */}
{/* <CircularProgress/> */}
<ColorPickerMain/>
   


    </>
    // <View>
    // <Animated.View style = {[{height:size, width: size, backgroundColor:'#4286f4'}, reanimated,]} />
    // </View>
  );
}

