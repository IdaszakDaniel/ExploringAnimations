import React, {useState} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import CircleWrapper from './CircleProgress/CircleWrapper';
import PhonesComponent from './PathMorphing/PhonesComponent';
import phones from './PathMorphing/phones';

const MainScreen = () => {
  const [animation, setAnimation] = useState(0);

  return (
    <>
      <View style={styles.container}>
        <Button title="Circle Progress" onPress={() => setAnimation(1)} />
        <Button title="Path Morphing" onPress={() => setAnimation(2)} />
      </View>
      {animation === 1 && <CircleWrapper />}
      {animation === 2 && <PhonesComponent {...{phones}} />}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '20%',
    alignItems: 'center',
    marginTop: 60,
  },
});

export default MainScreen;
