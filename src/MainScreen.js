import React, {useState} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import CircleWrapper from './CircleProgress/CircleWrapper';
import PhonesComponent from './PathMorphing/PhonesComponent';
import phones from './PathMorphing/phones';
import PathDrawingComponent from './PathDrawing/PathDrawingComponent';

const MainScreen = () => {
  const [animation, setAnimation] = useState(0);

  return (
    <>
      <View style={styles.container}>
        <Button title="Circle Progress" onPress={() => setAnimation(1)} />
        <Button title="Path Morphing" onPress={() => setAnimation(2)} />
        <Button title="Path Drawing" onPress={() => setAnimation(3)} />
      </View>
      {animation === 1 && <CircleWrapper />}
      {animation === 2 && <PhonesComponent {...{phones}} />}
      {animation === 3 && <PathDrawingComponent />}
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
