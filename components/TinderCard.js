import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const TinderCard = props => {
  return(
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image}
          source={props.data.image}
        />
      </View>

      <View style={styles.tinderInfoContainer}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{props.data.name}, {props.data.age}</Text>
        <Text style={{ fontSize: 18, color: 'rgb(100,100,100)' }}>{props.data.occupation}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '90%',
    maxHeight: 600,
    width: '100%',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    flex: 1,
    width: '100%',
  },
  image: {
    maxWidth: 387,
    height: '100%'
  },
  tinderInfoContainer: {
    backgroundColor: 'white',
    padding: 12,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
    width: '100%',
    elevation: 4,
  },
});

export default TinderCard;