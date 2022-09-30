import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  resizeBy: {
    width: 500,
    height: 500,
    resizeMode: 'stretch'
  },
});

const DisplayBigImage = (url) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.stretch}
        source={require(url)}
      />
    </View>
  );
}

export default DisplayBigImage;