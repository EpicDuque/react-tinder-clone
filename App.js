/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableNativeFeedback
} from 'react-native';

import AppBar from './components/AppBar';
import TinderCard from './components/TinderCard';
import ActionButton from './components/ActionButton';
import SwipeCards from './components/SwipeCards';

const App = () => {
  return (
    <View style={styles.screen}>
      <AppBar />
      
      <SwipeCards />

      <ActionsArea />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'rgb(235,235,235)',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
});

export default App;
