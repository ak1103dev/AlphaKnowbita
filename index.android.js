/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView,
} from 'react-native';

class knowbita extends Component {
  render() {
    return (
      <WebView source={{uri: 'https://www.knowbita.cpe.ku.ac.th'}} style={styles.container}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('knowbita', () => knowbita);
