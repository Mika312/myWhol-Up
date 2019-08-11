import React, { Component } from 'react';
import {View, Text } from 'react-native';
import {Button, Avatar, Divider} from 'react-native-elements';
import {connect} from 'react-redux';


class AccountScreen extends Component { 
  render() {
  return (
    <View style={{ flex: 1, backgroundColor:'#FFFFFF', alignItems: 'center',justifyContent:'center'}}>  
      <Avatar
       size="xlarge"
       rounded title={this.props.user.first_name[0]+this.props.user.last_name[0]}
      />
      <Divider style={{height:20}} />
      <Text style={{fontSize:20}} >{this.props.user.first_name+" "+this.props.user.last_name}</Text>
      <Text style={{fontSize:20}} >{this.props.user.email}</Text>
     <Divider style={{height:20}} />
    <Button 
      title="Disconnect"
      onPress={() => this.props.navigation.navigate('Home')}
    />
    </View>
  )
 }
}

function mapStateToProps(state) {
  console.log("ACCOUNT STATE ===>",state.userData)
  return { user: state.userData }
 }
 
 export default connect(
   mapStateToProps, 
   null
 )(AccountScreen);


