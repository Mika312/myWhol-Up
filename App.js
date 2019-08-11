import React, { Component } from 'react';
import {View } from 'react-native';
import Navigation from './components/Navigation';
import contactsList from './components/reducers/contact.reducer';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
const store = createStore(combineReducers({contactsList}));



export default class App extends Component {
  render(){
  return (
    <Provider store={store}>
    <View style={{flex:1}}>
      <Navigation/>
    </View>
   </Provider>
  );
 }
}

