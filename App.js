import React from 'react';
import { Main } from Main
import { StyleSheet, Text, View, StatusBar } from 'react-native';


export default class App extends React.Component {
  render() {
    return (
      <Main/>
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
