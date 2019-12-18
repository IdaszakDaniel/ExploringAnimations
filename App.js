import React from 'react';
import {View} from 'react-native';
import Animated, {Easing} from 'react-native-reanimated';
import CircleProgress from './src/CircleProgress';
import {timing} from 'react-native-redash';

const {Clock} = Animated;
const App = () => {
  const clock = new Clock();
  const config = {
    clock,
    duration: 20 * 1000,
    from: 0,
    to: 1,
    easing: Easing.linear,
  };
  return (
    <View
      style={{
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <CircleProgress progress={timing(config)} />
    </View>
  );
};

export default App;
