import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableNativeFeedback,
} from 'react-native';
import ActionButton from './components/ActionButton';

const ActionsArea = props => {
  return(
    <View style={styles.actionsArea}>
        <View style={styles.iconsActionBar}>

          <ActionButton onPress={() => console.log('Rewind')} icon={require('../res/rewind.png')} />
          <ActionButton onPress={() => console.log('Nope')} big={true} icon={require('../res/nope.png')} />
          <ActionButton onPress={() => console.log('Boost')} icon={require('../res/boost.png')} />
          <ActionButton onPress={() => console.log('Like')} big={true} icon={require('../res/like.png')} />
          <ActionButton onPress={() => console.log('SUPER Like')} icon={require('../res/super-like.png')} />

        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  actionsArea: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 10,
  },
  iconsActionBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    padding: 12,
  },
});

export default ActionsArea;