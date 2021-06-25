import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import HomeScreen from './Screens/Home';
import DetailsScreen from './Screens/Details'
import{createAppContainer} from 'react-navigation'
import{createStackNavigator} from 'react-navigation-stack'

export default function App() {
  return (
<AppContainer/>
  );
}
const appstacknavigator=createStackNavigator({
  Home:{
    screen: HomeScreen,
    navigationOptions:{headerShown:false}
  

},
details:{
  screen:DetailsScreen
}

},
{initialRouteName:'Home'}
)
const AppContainer=createAppContainer(appstacknavigator)
