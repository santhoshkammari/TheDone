import React ,{Component,useState} from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon4 from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';

import {useColorScheme} from 'react-native';

import HabitProgress from './components/HabitProgress';
import SettingsScreen from './components/SettingsScreen';
import TimerCard from './components/Timer';
import SavedData from './components/SavedData';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const tabOptions = {
  activeTintColor: 'blue',
  inactiveTintColor: 'gray',
};


const useTheme = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return isDarkMode ? 'dark' : 'light';
};

const App = () => {
const theme=useTheme();
  return ( 
    <NavigationContainer>
  <Tab.Navigator >
    <Tab.Screen   
      name="HabitProgress"
      component={HabitProgress }
      options={{
        headerShown: false,
        tabBarLabel: 'HabitProgress',
        tabBarIcon: ({ color, size }) => (
          <Icon4
              name="home"
              // style={{ marginLeft: width*0.1 }}
              size={25}
              color="#c7d2cc"
            />
        ),
        tabBarStyle: {
          backgroundColor: theme === 'dark' ? '#ffffff' : '#2a4262',
        },
        tabBarLabelStyle: {
          fontSize: 0,
        },
       tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: 'blue',
      }}
    />
    <Tab.Screen
      name="Timer"
      component={TimerCard}
      options={{
        tabBarLabel: 'Timer',
        tabBarLabelStyle: {
          fontSize: 0,
        },
        tabBarIcon: ({ color, size }) => (
          <Icon2
              name="timer-outline"
              // style={{ marginLeft: width*0.2 }}
              size={25}
              color="#c7d2cc"
            />
        ),
      }}
    />
    <Tab.Screen
      name="SavedData"
      component={SavedData}
      options={{
        tabBarLabel: 'SavedData',
        tabBarLabelStyle: {
          fontSize: 0,
        },
        tabBarIcon: ({ color, size }) => (
          <Icon
              name="heart"
              // style={{ marginLeft: width*0.2 }}
              size={25}
              color="#c7d2cc"
            />
        ),
      }}
    />
    <Tab.Screen
      name="Settings"
      component={SettingsScreen}
      options={{
        tabBarLabel: 'Settings',
        tabBarLabelStyle: {
          fontSize: 0,
        },
        tabBarIcon: ({ color, size }) => (
          <Icon4
              name="settings"
              // style={{ marginLeft: width*0.2 }}
              size={25}
              color="#c7d2cc"
            />
        ),
      }}
    />
  </Tab.Navigator>

    </NavigationContainer>
   );
}
 
export default App;
