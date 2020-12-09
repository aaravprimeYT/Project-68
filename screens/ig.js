import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

export default class Ig extends React.Component {
  render(){
  return (
    <View style={styles.container}>
        <Image source="../assets/ig.png"></Image>
        <Text>Instagram</Text>
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
});