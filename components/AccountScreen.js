import React, { Component } from 'react';
import {View, Text } from 'react-native';
import {Button, Avatar, Divider} from 'react-native-elements';

class AccountScreen extends Component { 
  render() {
  return (
    <View style={{ flex: 1, backgroundColor:'#FFFFFF', alignItems: 'center',justifyContent:'center'}}>  
      <Avatar
       size="xlarge"
       rounded title="MP"
      />
      <Divider style={{height:20}} />
      <Text style={{fontSize:20}} >Michael PELTIER</Text>
      <Text style={{fontSize:20}} >Mika@gmail.com</Text>
     <Divider style={{height:20}} />
    <Button 
      title="Disconnect"
      onPress={() => this.props.navigation.navigate('Home')}
    />
    </View>
  )
 }
}

export default AccountScreen;
