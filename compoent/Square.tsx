import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { N, Square_Size  } from './constant'
import Animated, { useAnimatedStyle, useDerivedValue, withSpring, withTiming } from 'react-native-reanimated'


interface SquareProps {
    index: number
    progress : Animated.SharedValue<number>
}
const Square: React.FC<SquareProps> = ({index , progress}) => {
    const offsetAngle = (2 * Math.PI) /N;
    const finalAngle = offsetAngle * (N - 1 -index);
   

    const rotate = useDerivedValue(() => {
        if(progress.value <= 2*Math.PI){

            return  Math.min(finalAngle, progress.value);
        }
        if (progress.value -2*Math.PI < finalAngle){
            return finalAngle;
        }
        return progress.value
    }, []);

    const Transaltey = useDerivedValue(() => {
        if (rotate.value === finalAngle) {
            return withSpring(-N * Square_Size);
        }
if(progress.value > 2*Math.PI){
    return withTiming((index - N) * Square_Size);
}

return withTiming( -index * Square_Size);
    })

    const rstyle = useAnimatedStyle(() => {
        return{
            transform:[
                {rotate: `${rotate.value}rad`},
                { translateY:  Transaltey.value},
            ],
        };
    });
  return (
    
    <Animated.View
            key={index}
            style ={[{backgroundColor:'#12c2e9',
            height: Square_Size,
            aspectRatio:1,
            
            position:'absolute',
           
        }, rstyle,
    ]}
            /> 
  )
}

export default Square;

const styles = StyleSheet.create({})