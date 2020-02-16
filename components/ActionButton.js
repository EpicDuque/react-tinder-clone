import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const ActionButton = props => {

  return (
    <TouchableOpacity
      onPress={props.onPress.bind(this)}
      activeOpacity={0.6}
      style={props.big ? styles.actionIconContainerBig : styles.actionIconContainer}>

      <Image style={props.big ? styles.actionIconBig : styles.actionIcon}
        source={props.icon}
        resizeMode='contain'
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  actionIconContainer: {
    padding: 11,
    borderRadius: 26,
    backgroundColor: 'white',
    elevation: 2,
  },
  actionIcon: {
    width: 28,
    height: 28,
  },
  actionIconContainerBig: {
    padding: 15,
    borderRadius: 32,
    backgroundColor: 'white',
    elevation: 2,
  },
  actionIconBig: {
    width: 32,
    height: 32,
  }
})

export default ActionButton;