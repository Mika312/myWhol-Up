import React from 'react';
import {StyleSheet, Text, View, Platform} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
// Imports de mes composants de navigation.
import {createBottomTabNavigator, createAppContainer, createStackNavigator} from 'react-navigation';
// Imports de mes screens présent dans ma navigation.
import SignUpScreen from './SignUpScreen';
import SignInScreen from './SignInScreen';
import HomeScreen from './HomeScreen';
import AccountScreen from './AccountScreen';
import SearchScreen from './SearchScreen';
import FollowingScreen from './FollowingScreen';



// Creation de ma  BottomNavigation.
const BottomNavigator = createBottomTabNavigator({
Account: AccountScreen,
Search: SearchScreen,
Following: FollowingScreen,
}, {
defaultNavigationOptions: ({navigation}) => ({
tabBarIcon: ({focused, horizontal, tintColor}) => {
var iconName;
var outline = (focused)
? ''
// : '-outline'; // this -outline is actually leading to a visual error. Another icon library could solve the problem.
: '';
if (navigation.state.routeName == 'Account') {
Platform.OS === 'ios'
? iconName = 'ios-information-circle'
: iconName = 'md-information-circle'
} else if (navigation.state.routeName == 'Search') {
Platform.OS === 'ios'
? iconName = 'ios-search'
: iconName = 'md-search'
} else if (navigation.state.routeName == 'Following') {
Platform.OS === 'ios'
? iconName = 'ios-people'
: iconName = 'md-people'
} 
return <Ionicons name={iconName + outline} size={25} color={tintColor}/>;
}
}),
tabBarOptions: {
activeTintColor: '#0a3d62',
inactiveTintColor: 'gray'
}
});
// Création de ma StackNavigation incluant ma BottomNavigation.
var StackNavigator = createStackNavigator({
// Pages de ma navigation sans bottom
Home: HomeScreen,
SignIn: SignInScreen,
SignUp: SignUpScreen,
// BottomNavigation inclue.
BottomNavigator: BottomNavigator
}, {headerMode: 'none'})
// Export de ma StackNavigation etant ma Navigation principale.
export default Navigation = createAppContainer(StackNavigator);