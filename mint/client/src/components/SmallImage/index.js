import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  resizeBy: {
    width: 100,
    height: 100,
    resizeMode: 'stretch'
  },
});

const DisplaySmallImage = (url) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.stretch}
        source={require(url)}
      />
    </View>
  );
}

export default DisplaySmallImage;