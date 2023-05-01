import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TimerCard from './Timer';
import Utilities from './Utilities';
import Cards from './Cards';
import Notes from './Notes';
const Stack = createStackNavigator();
class Like extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Utilities" component={Utilities} />
        <Stack.Screen name="Timer" component={TimerCard} />
        <Stack.Screen name="Track" component={Cards} />
        <Stack.Screen name="Notes" component={Notes} />
      </Stack.Navigator>
    );
  }
}

export default Like;
