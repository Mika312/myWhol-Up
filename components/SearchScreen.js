import React, { Component } from 'react';
import {View, Text } from 'react-native';
import {ListItem } from 'react-native-elements';

class SearchScreen extends Component { 
  render() {
    var list = [
        {
          name: 'Thomas Sauveton',
          title: 'TS',
          email: 'contact@gmail.com'
        },
        {
          name: 'Anais NAVARRO',
          title: 'AN',
          email: 'contact@gmail.com'
        },
        {
            name: 'Mia PELTIER',
            title: 'MP',
            email: 'contact@gmail.com'
          },

      ]
  return (
    <View style={{ flex: 1, backgroundColor:'#FFFFFF'}}>  
    {
    list.map((l, i) => (
      <ListItem
        key={i}
        leftAvatar={{ title: l.title }}
        title={l.name}
        subtitle={l.email}
      />
    ))
  }
    </View>
  )
 }
}

export default SearchScreen;