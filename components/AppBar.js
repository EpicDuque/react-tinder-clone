import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableNativeFeedback,
} from 'react-native';

const AppBar = props => {

  return (
    <View style={styles.appBar}>
      <TouchableNativeFeedback onPress={() => console.log('Settings Button')}
        background={TouchableNativeFeedback.SelectableBackground()}>

        <Image style={styles.appbarIcon} source={require('../res/settings.png')} />
      </TouchableNativeFeedback>

      <Image style={styles.logo} resizeMode='contain' source={require('../res/logo.png')} />

      <TouchableNativeFeedback onPress={() => console.log('Chat Button')}
        background={TouchableNativeFeedback.SelectableBackground()}>

        <Image style={styles.appbarIcon} source={require('../res/chat.png')} />
      </TouchableNativeFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  appBar: {
    padding: 8,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgb(225,225,225)',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  appbarIcon: {
    width: 32,
    height: 32,
  },
  logo: {
    width: 100,
    height: 100,
  },
});

export default AppBar;