import React from 'react';
import {View, StyleSheet} from 'react-native';
import Animated, {Easing} from 'react-native-reanimated';
import CircleProgress from './CircleProgress';
import {timing} from 'react-native-redash';

const {Clock} = Animated;
const CircleWrapper = () => {
  const clock = new Clock();
  const config = {
    clock,
    duration: 20 * 1000,
    from: 0,
    to: 1,
    easing: Easing.linear,
  };
  return (
    <View style={styles.container}>
      <CircleProgress progress={timing(config)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CircleWrapper;
