import React ,{Component,useState} from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon4 from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';

import {useColorScheme,Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
import HabitProgress from './components/HabitProgress';
import SettingsScreen from './components/SettingsScreen';
import TimerCard from './components/Timer';
import SavedData from './components/SavedData';
import Calendar from './components/Calendar';

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
  let x=0;
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
              size={size}
              color={color}
            />
        ),
        tabBarStyle: {
          backgroundColor: theme === 'dark' ? '#ffffff' : '#2a4262',
          height:height*0.08,
        },
        tabBarLabelStyle: {
          fontSize: 0,
        },
       tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: 'black',
      }}
    />
    <Tab.Screen   
    name="Calendar"
    component={Calendar }
    options={{
      headerShown: false,
      tabBarLabel: 'Calendar',
      tabBarIcon: ({ color, size }) => (
        <Icon4
            name="calendar"
            // style={{ marginLeft: width*0.1 }}
            size={size}
            color={color}
          />
      ),
      tabBarStyle: {
        backgroundColor: theme === 'dark' ? '#ffffff' : '#2a4262',
      },
      tabBarLabelStyle: {
        fontSize: 0,
      },
     tabBarInactiveTintColor: 'gray',
      tabBarActiveTintColor: 'black',
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
              size={size}
              color={color}
            />
        ),
       tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: 'black',
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
              size={size}
              color={color}
            />
        ),
       tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: 'black',
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
              size={size}
              color={color}
            />
        ),
       tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: 'black',
      }}
    />
  </Tab.Navigator>

    </NavigationContainer>
   );
}
 
export default App;

