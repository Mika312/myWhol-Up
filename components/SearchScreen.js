import React, { Component } from 'react';
import {View, Text } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import {connect} from 'react-redux';

class SearchScreen extends Component { 


  render() {

    var colorNbr = Math.random();
    var color;
    if (colorNbr < 0.25) {
      color = '#e67e22';
    } else if (colorNbr < 0.5) {
      color = '#3498db';
    } else if (colorNbr < 0.75) {
      color = '#16a085';
    } else {
      color = '#e74c3c';
    };

    var list = [
        {
        last_name: 'SAUVETON',
        first_name:'Thomas',
        email: 'Sauveton@gmail.com',
        company_name:'La S Company',
        color:color
        },
        {
        last_name: 'NAVARRO',
        first_name:'Anaïs',
        email: 'Navarro@gmail.com',
        company_name:'La N Company',
        color:color
        },
        {
        last_name: 'PELTIER',
        first_name:'Mia',
        email: 'PELTIER@gmail.com',
        company_name:'La P Company',
        color:color
        },

      ]
  return (
    <View style={{ flex: 1, backgroundColor:'#FFFFFF'}}>  
    {
    list.map((l, i) => (
      // Mise en place d'une écoute du signal “Press” associée à la fonction handleContact.
      <ListItem
        key={i}
        leftAvatar={ 
        <Avatar
          small
          rounded
          title={l.last_name[0]+l.first_name[0]}
          overlayContainerStyle={{backgroundColor:l.color}}
        />}
        title={l.last_name+" "+l.first_name}
        subtitle={
          <View >
            <Text>{l.email}</Text>
            <Text>{l.company_name}</Text>
          </View>
        }
        onPress={() => this.props.handleContact(l.last_name, l.first_name, l.email, l.company_name)}
        />
    ))
  }
    </View>
  )
 }
}

// Création d'un composant conteneur autour du composant SearchScreen.
function mapDispatchToProps(dispatch) {
  return {
    handleContact: function(last_name, first_name, email, company_name) { 
     dispatch( {type: 'addcontact',
               last_name,
               first_name,
               email,
               company_name
              } ) 
   }
  }
 }

// Modification de l’export pour que le composant conteneur puisse être utilisé à l'extérieur.
 export default connect(
  null, 
  mapDispatchToProps
)(SearchScreen);
