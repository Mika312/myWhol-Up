import React, { Component } from 'react';
import {View } from 'react-native';
import Navigation from './components/Navigation';
import contactsList from './components/reducers/contact.reducer';
import userData from './components/reducers/user.reducer';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
const store = createStore(combineReducers({contactsList,userData}));



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

