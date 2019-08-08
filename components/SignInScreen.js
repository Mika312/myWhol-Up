import React, { Component } from 'react';
import {View} from 'react-native';
import { Button, Input, Divider} from 'react-native-elements';
import ipconfig from '../config.js'

class SignUpScreen extends Component { 
  constructor() {
// Creation des 2 etats initialisé vide dans le constructeur.
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      email:"",
      password:"",  
// Mise en place de l'etat du message d'erreur.
      errorMessage :'',
    };
  }
// utilisation d'une fonction handleSubmit
  handleSubmit() {
    console.log("STATES===>",this.state.email,this.state.password)

    var ctx = this
// Appel vers la route du Backend + paramétrage  de la requête pour que les informations soient correctement transmises au Backend.
    fetch(''+ipconfig+'/SignIn?email='+this.state.email+'&password='+this.state.password+'')
.then(function(response) {
  return response.json();
})
.then(function(data) {
  console.log("DATA ===>",data);
// Exploitation de la réponse envoyée par le BackEnd. 
// En fonction du résultat reçu, mise en place  de deux scénarios différents.
// Si on a un resultat alors on rejoint la page Compte.
  if(data.result){
    ctx.props.navigation.navigate('Account');
// Sinon on a un message d'erreur.
  }else{
    ctx.setState({
      errorMessage:"ERREUR D'IDNTIFICATION"
    })
  }
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
     placeholder='Email'
     onChangeText={(value) => this.setState({email: value})}
     />
      <Input
     placeholder='Password'
     onChangeText={(value) => this.setState({password: value})}
     errorStyle={{ color: 'red' }}
     errorMessage={this.state.errorMessage}
     />
     <Divider style={{height:20}} />
    <Button 
      title="Sign In"
//  Mise en place la mécanique permettant de capter le clic sur le bouton.
      onPress={this.handleSubmit}
    />
    </View>
  )
 }
}

export default SignUpScreen;