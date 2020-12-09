import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

export default class fb extends React.Component {
  render(){
  return (
    <View style={styles.container}>
        <Image source="../assets/fb.png" style={styles.image1}></Image>
        <Text>Facebook</Text>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image1:{
    width: 100,
    height: 100,
    marginTop: 20,
    alignSelf: 'center'
  }
});