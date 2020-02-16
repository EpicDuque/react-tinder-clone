// SwipeCards.js
'use strict';

import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import SwipeCards from 'react-native-swipe-cards';
import TinderCard from './TinderCard';

const NoMoreCards = props => {
  return (
    <View>
      <Text style={styles.noMoreCardsText}>No more cards</Text>
    </View>
  )
}

export default (props) => {
  const [cards, setCards] = useState([
    {
      name: 'Lunay',
      age: 19,
      occupation: 'Cringy Puerto Rican artist',
      image: require('../res/Lunay.png')
    },
    {
      name: 'Harold',
      age: 55,
      occupation: 'Internet Meme',
      image: require('../res/Harold.jpg')
    },
  ]);
  const [pos, setPos] = useState(0);

  const handleYup = (card) => {
    setPos(pos + 1);
  }

  const handleNope = (card) => {
    setPos(pos - 1);
  }

  // If you want a stack of cards instead of one-per-one view, activate stack mode
  // stack={true}
  return (
    <SwipeCards
      cards={cards}
      renderCard={(cardData) =>
        <View style={styles.card}>
          <TinderCard data={cardData} />
        </View>}
      
      renderNoMoreCards={() => <NoMoreCards />}
    />
  )
}

const styles = StyleSheet.create({
  card: {
    marginTop: 8,
    flex: 1,
  },
  noMoreCardsText: {
    fontSize: 22,
  }
})