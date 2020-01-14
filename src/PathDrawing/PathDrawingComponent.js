import React from 'react';
import {View, StyleSheet} from 'react-native';
import {AnimatedSVGPath} from 'react-native-svg-animations';
import path from './path';

const PathDrawingComponent = () => (
  <View style={styles.container}>
    <AnimatedSVGPath
      strokeColor={'black'}
      duration={5000}
      strokeWidth={10}
      height={400}
      width={400}
      scale={0.75}
      delay={100}
      d={path}
      loop={false}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PathDrawingComponent;
