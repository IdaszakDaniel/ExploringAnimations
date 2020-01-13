import * as React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import Animated from 'react-native-reanimated';
import {onScroll} from 'react-native-redash';

const {width} = Dimensions.get('window');
export const SEGMENT_WIDTH = width / 2;

export default ({phones, slider: x}) => {
  return (
    <View>
      <Animated.ScrollView
        scrollEventThrottle={1}
        onScroll={onScroll({x})}
        showsHorizontalScrollIndicator={false}
        horizontal>
        {phones.map((_, index) => {
          return (
            <View style={styles.container}>
              <View style={styles.dents}>
                <View style={styles.firstDent} />
                <View style={styles.smallDent} />
                <View style={styles.smallDent} />
                <View style={styles.smallDent} />
                <View style={styles.bigDent} />
              </View>
            </View>
          );
        })}
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SEGMENT_WIDTH,
  },
  dents: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  firstDent: {
    backgroundColor: 'transparent',
    width: 5,
    height: 35,
  },
  smallDent: {
    backgroundColor: 'black',
    width: 5,
    height: 35,
  },
  bigDent: {
    backgroundColor: 'black',
    width: 10,
    height: 70,
  },
});
