import React, {Component} from 'react';
import {Alert, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './Home/Home';
import Calendar from './Home/Calendar';
import LoginScreen from './Home/Login';
const Stack = createStackNavigator();

class HomePage extends Component {
  render() {
    const {clicked, handleTheme} = this.props;
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{
            headerShown: false,
          }}>
          {props => (
            <Home
              name="Home"
              clicked={clicked}
              {...props}
              onTheme={handleTheme}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="Calendar" component={Calendar} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    );
  }
}
{
  /* {clicked ? (
          <Stack.Screen name="InputCard" component={InputCard} />
        ) : ( */
}
{
  /* )
        } */
}

export default HomePage;
