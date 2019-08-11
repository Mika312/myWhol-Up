import React, { Component } from 'react';
import {View} from 'react-native';
import { Button, Input, Divider} from 'react-native-elements';
import ipconfig from '../config.js'
import { connect } from 'react-redux';


class SignUpScreen extends Component { 
// Creation des 4 etats initialisés vide dans le constructeur.
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
// Parametrage de la requete avec les etats pour l'envoi des informations en  POST au Backend.

    fetch(''+ipconfig+'/SignUp', {
 method: 'POST',
 headers: {'Content-Type':'application/x-www-form-urlencoded'},
 body: 'first_name='+this.state.last_name+'&last_name='+this.state.last_name+'&email='+this.state.email+'&password='+this.state.password
})
.then(function(response) {
  return response.json();
})
.then(function(data) {
  console.log("DATA THEN FETCH ===>",data);
  ctx.props.handleUserValid(data.user.last_name, data.user.first_name, data.user.email, data.user.token)
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
  {/* Mise en place la mécanique permettant de capter le clic sur le bouton. */}
    <Button 
      title="Sign Up"
      onPress={this.handleSubmit}
    />
    </View>
  )
 }
}


// Création d'un composant conteneur autour du composant SignUpScreen.
function mapDispatchToProps(dispatch) {
  return {
    handleUserValid : function(name_user, firstname_user, email_user, token_user) { 
     dispatch( {type: 'setUserData',
                last_name:name_user,
                first_name:firstname_user,
                email:email_user,
                token:token_user,
              } ) 
   }
  }
 }

// Modification de l’export pour que le composant conteneur puisse être utilisé à l'extérieur.
 export default connect(
  null, 
  mapDispatchToProps
)(SignUpScreen);

