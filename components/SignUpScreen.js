import React, { Component } from 'react';
import {View} from 'react-native';
import { Button, Input, Divider} from 'react-native-elements';
import ipconfig from '../config.js'

class SignInScreen extends Component { 
// Creation des 4 etats initialisé vide dans le constructeur.
  constructor() {
    super();
//  Bind de la fonction thandleSubmit
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      first_name:"",
      last_name:"",
      email:"",
      password:"",    
    };
  }

// utilisation d'une fonction handleSubmit
  handleSubmit() {
  // console.log("STATES===>",this.state.first_name,this.state.last_name,this.state.email,this.state.password)

    var ctx = this
// Appel vers la route du Backend.
    fetch(''+ipconfig+'/SignUp', {
 method: 'POST',
 headers: {'Content-Type':'application/x-www-form-urlencoded'},
// Parametrage de la requete avec les etats pour l'envoi des informations en  POST au Backend.
 body: 'first_name='+this.state.last_name+'&last_name='+this.state.last_name+'&email='+this.state.email+'&password='+this.state.password
})
.then(function(response) {
  return response.json();
})
.then(function(data) {
  console.log("DATA THEN FETCH ===>",data);
  ctx.props.navigation.navigate('Account');
})
.catch(function(error) {
  console.log('Request failed', error)
});
  }

  

  render() {
  return (
    <View style={{ flex: 1, backgroundColor:'#FFFFFF', alignItems: 'center',justifyContent:'center'}}>  
{/* Mise en place de la mécanique permettant de capter les changements sur les champs de saisie. 
 Ajout des instructions nécessaires à la mise à jour de l’état associé au champs de saisie */}
    <Input
     placeholder='FirstName'
     onChangeText={(value) => this.setState({first_name: value})} 
     />
      <Input
     placeholder='LastName'
     onChangeText={(value) => this.setState({last_name: value})} 
     />
      <Input
     placeholder='Email'
     onChangeText={(value) => this.setState({email: value})} 
     />
      <Input
     placeholder='Password'
     onChangeText={(value) => this.setState({password: value})} 
     />
     <Divider style={{height:20}} />
    <Button 
      title="Sign Up"
//  Mise en place la mécanique permettant de capter le clic sur le bouton.
      onPress={this.handleSubmit}
    />
    </View>
  )
 }
}

export default SignInScreen;