import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TimerCard from './Timer';
import SavedData from './SavedData';
import Utilities from './Utilities';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import TestingFeature from './TestingFeature';
const Stack = createStackNavigator();

class Like extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Utilities" component={Utilities} />
        <Stack.Screen name="Timer" component={TimerCard} />
        <Stack.Screen name="SavedData" component={SavedData} />
        <Stack.Screen name="TestingFeature" component={TestingFeature} />
      </Stack.Navigator>
    );
  }
}

export default Like;
