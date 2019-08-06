import React, { Component } from 'react';
import {ImageBackground, Text } from 'react-native';
import {Button, Divider} from 'react-native-elements';

class HomeScreen extends Component { 
  render() {
  return (
    <ImageBackground source={require('../assets/network.jpg')} style={{width: '100%', height: '100%',alignItems: 'center',justifyContent:'center'}}>
    <Text style={{color:'#FFFFFF', fontSize:50}} >WHOL'UP</Text>
    <Text style={{color:'#FFFFFF', fontSize:30}} >Sart your networking</Text>
    <Text style={{color:'#FFFFFF', fontSize:30}} >now and everywhere</Text>
    <Divider style={{height:20}} />
    <Button 
      title="Sign In"
      onPress={() => this.props.navigation.navigate('SignIn')}
    />
    <Divider style={{height:20}} />
     <Button 
      style={{width:'30%'}}
      title="Sign Up"
      onPress={() => this.props.navigation.navigate('SignUp')}
    />
    </ImageBackground>
  )
 }
}

export default HomeScreen;