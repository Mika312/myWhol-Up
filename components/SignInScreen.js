import React, { Component } from 'react';
import {View} from 'react-native';
import { Button, Input, Divider} from 'react-native-elements';

class SignUpScreen extends Component { 
  render() {
  return (
    <View style={{ flex: 1, backgroundColor:'#FFFFFF', alignItems: 'center',justifyContent:'center'}}>  
      <Input
     placeholder='Email'
     />
      <Input
     placeholder='Password'
     />
     <Divider style={{height:20}} />
    <Button 
      title="Sign In"
      onPress={() => this.props.navigation.navigate('Account')}
    />
    </View>
  )
 }
}

export default SignUpScreen;