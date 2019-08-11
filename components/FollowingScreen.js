import React, { Component } from 'react';
import {View, Text } from 'react-native';
import {Avatar, ListItem} from 'react-native-elements';
import {connect} from 'react-redux';


class FollowingScreen extends Component { 
  render() {
  
  return (
    <View style={{ flex: 1, backgroundColor:'grey'}}> 
  {/* Mise en place des instructions nécessaires pour parcourir l’intégralité de la propriété contacts. 
  Et generer un nouveau composant <ListItem>  */}
    {
    this.props.contacts.map((l, i) => (
      <ListItem
      key={i}
      leftAvatar={ <Avatar
        small
        rounded
        title={l.last_name[0]+l.first_name[0]}
        overlayContainerStyle={{backgroundColor: l.color}}
      />}
      title={l.last_name+" "+l.first_name}
      subtitle={
        <View >
          <Text>{l.email}</Text>
          <Text>{l.company_name}</Text> 
        </View>
      }
    />
    ))
  }
    </View>
  )
 }
}

// Mise en place du composant conteneur mapStateToProps pour exploiter 
// contactsList afin de le déverser dans une propriété nommée contacts
function mapStateToProps(state) {
  return { contacts: state.contactsList }
 }
 
 export default connect(
   mapStateToProps, 
   null
 )(FollowingScreen);

