import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
interface Props {
  title: string;
  index: number;
  transX: Animated.SharedValue<number>;
}
const { height, width } = Dimensions.get("window");

const Page: React.FC<Props> = ({ index, title, transX }) => {
  const inputrange = [(index - 1) * width, index * width, (index + 2) * width];
  const rStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      transX.value,
      inputrange,
      [0, 1, 0],
      Extrapolate.CLAMP
    );
    const borderRadius = interpolate(
      transX.value,
      inputrange,
      [0, 127, 0],
      Extrapolate.CLAMP
    );

    return {
      borderRadius,
      transform: [{ scale }],
    };
  });
  //Text animation
  const rTextstyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      transX.value,
      inputrange,
      [125, 0, -125],
      Extrapolate.CLAMP
    );
    const opacity = interpolate(
      transX.value,
      inputrange,
      [-2, 1, -2],
      Extrapolate.CLAMP
    );
    return {
    opacity,
      transform: [{translateY,}]
    };
  });

  return (
    <View
      style={[
        styles.pageContainer,
        { backgroundColor: `rgba(30, 139, 195,0.${index + 2})` },
      ]}
    >
      <Animated.View style={[styles.square, rStyle]} />
      <Animated.View style={[styles.text, rTextstyle]}>
        <Text style={styles.textinput}>{title}</Text>
      </Animated.View>
    </View>
  );
};
const styles = StyleSheet.create({
  pageContainer: {
    width,
    height,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  square: {
    height: 250,
    width: 250,
    backgroundColor: "#00BFFF",
    borderRadius: 0,
  },
  text: {
    position: "absolute",
  },
  textinput: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
  },
});
export default Page;
