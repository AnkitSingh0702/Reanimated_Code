//Interpole
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";
import Page from "../compoent/Page";

export default function Interpolate() {
  const words = ["What's", "up", "Guys"];
  const transX = useSharedValue(0);
  const scrollhandeler = useAnimatedScrollHandler((e) => {
    transX.value = e.contentOffset.x;
  });

  return (
    <Animated.ScrollView
    pagingEnabled
      onScroll={scrollhandeler}
      scrollEventThrottle={16} // we need 6 fps animation
      horizontal
      style={styles.main}
    >
      {words.map((title, index) => {
        return <Page key={index.toString()} title={title} index={index}  transX = {transX}/>;
      })}
    </Animated.ScrollView>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
