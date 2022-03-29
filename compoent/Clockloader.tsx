import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { N, Square_Size } from './constant';
import { StatusBar } from 'expo-status-bar';
import Square from './Square';
import { Easing, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';



const Clockloader = () => {
    const progress = useSharedValue(0);

    useEffect(() => {
        progress.value = withRepeat( withTiming(4 * Math.PI, {duration: 4000, easing: Easing.linear}),-1);
    })
    
  return (
    <View style={styles.container}>
    {new Array(N).fill(0).map((_, index) =>{
        return(
           <Square key={index}  progress = {progress} index={index}/> 
        );
    })}
 <StatusBar style='auto' />
  </View>
  )
}

export default Clockloader

const styles = StyleSheet.create({
container:{
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'#1f2937'
},

})