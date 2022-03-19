import { View, Text, StyleSheet, Dimensions } from "react-native";
import React, { useCallback } from "react";
import { useEffect } from "react";
import Svg, { Circle } from "react-native-svg";
import Animated, { useAnimatedProps, useDerivedValue, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";
import { opacity, ReText } from "react-native-redash";
import { TouchableOpacity } from 'react-native';
const { width, height } = Dimensions.get("window");
const strokecolor = "#00397A";
const strokebackcolor ="#B4F5FD"
const clength = 1000;
const r = clength / (2 * Math.PI);

const AnimatedCircle = Animated.createAnimatedComponent(Circle)
export default function CircularProgress() {
  const progress = useSharedValue(0);

  

  const animatedProps = useAnimatedProps(() => ({
  strokeDashoffset: clength*(1 - progress.value)
  }));

  const progressText = useDerivedValue(() => {
    return `${Math.floor(progress.value*100) }`
  })
  
  const start  = useCallback(() => {
    progress.value = withTiming(progress.value  > 0 ? 0 : 1, { duration: 1000 });
    opacity.value = withRepeat(withTiming(0),Infinity,true)

  }, []) 
  return (
    <View style={styles.container}>
      
      <ReText style ={styles.text} text ={progressText}/>
      <Svg style = {{position: 'absolute'}}>
        <Circle
          cx={width / 2}
          cy={height / 2}
          r={r}
          stroke={strokecolor}
          strokeWidth={30}
          strokeLinecap = {'round'}
        />
         <AnimatedCircle
          cx={width / 2}
          cy={height / 2}
          r={r}
          stroke={strokebackcolor}
          strokeWidth={15}
          strokeDasharray ={clength}
          strokeDashoffset = {clength}
          animatedProps = {animatedProps}
        />
      </Svg>

      <TouchableOpacity style={styles.button} onPress = {start}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2E6FA0",
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  text:{
    marginBottom:40,
    color: '#fff',
    fontSize :60,
    width: 200,
    textAlign:"center"
  },
  button: {
    position: 'absolute',
    bottom: 80,
    width: width * 0.7,
    height: 60,
    backgroundColor: "#00397A",
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 25,
    color: 'white',
    letterSpacing: 2.0,
  },
  
});
