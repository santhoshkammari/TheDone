import React ,{Component,useState} from 'react';
import { View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon4 from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import {useColorScheme,Dimensions,Alert} from 'react-native';
const {width, height} = Dimensions.get('window');
import HabitProgress from './components/HomePage';
import SettingsScreen from './components/SettingsScreen';
import TodoList from './components/TodoList/todoList';
import Like from './components/Like/Like';

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
const [clicked,setClicked]=useState(0);
const [theme,setTheme]=useState(0);

const handleOnPressed= () =>{
  setClicked(clicked===0?1:0);
}
const handleOnTheme= () =>{
  setTheme(theme==0?1:0);
}
  return ( 
    <NavigationContainer >
      <View style={{ flex: 1 ,
        backgroundColor:theme==0?'#f1f6fb':'#15202B',
        justifyContent:'space-around'
        }}>
  <Tab.Navigator 
  screenOptions={{
    tabBarStyle:{
      backgroundColor:theme==0?'#ffffff':'#2b3a5c',
       height:height*0.11,
    } ,
    tabBarLabelStyle: {
      fontSize: 0,
    },
    tabBarInactiveTintColor: '#aebdd1',
        tabBarActiveTintColor: '#213255',
  }}
 >
    {/* <Tab.Screen   
      name="HabitProgress"
      component={()=><HabitProgress clicked={clicked} theme={theme} handleTheme={handleOnTheme}/> }
      options={{
        headerShown: false,
        tabBarLabel: 'HabitProgress',
        tabBarIcon: ({ color, size }) => (
          <Icon4
              name="home"
              size={20}
              color={color}
            />
        ),
        
        
      }}
    />  */}
    {/* <Tab.Screen
  name="HabitProgress"
  component={() => (
    <HabitProgress clicked={clicked} theme={theme} handleTheme={handleOnTheme} />
  )}
  options={{
    headerShown: false,
    tabBarLabel: 'HabitProgress',
    tabBarIcon: ({ color, size }) => (
      <Icon4 name="home" size={20} color={color} />
    ),
  }}
/> */}
<Tab.Screen
  name="HabitProgress"
  options={{
    headerShown: false,
    tabBarLabel: 'HabitProgress',
    tabBarIcon: ({ color, size }) => (
      <Icon4 name="home" size={20} color={color} />
    ),
  }}
>
  {() => <HabitProgress clicked={clicked} theme={theme} handleTheme={handleOnTheme} />} 
</Tab.Screen>

    <Tab.Screen   
      name="TodoList"
      component={TodoList }
      options={{
        headerShown: false,
        tabBarLabel: 'TodoList',
        tabBarIcon: ({ color, size }) => (
          <Icon5
            name="tasks"
            size={20}
            color={color}
          />
          
        )
        
        
      
      }}
    />  
    <Tab.Screen
      name="Like"
      component={Like}
      options={{
        headerShown: false,
        tabBarLabel: 'Like',
        tabBarLabelStyle: {
          fontSize: 0,
        },
        tabBarIcon: ({ color, size }) => (
          <Icon4
              name="heart"
              size={20}
              color={color}
            />
        ),
      }}
    />
    {/* <Tab.Screen
      name="Settings"
      component={()=><SettingsScreen  clicked={clicked}/>}
      options={{
        tabBarLabel: 'Settings',
       
        tabBarIcon: ({ color, size }) => (
          <Icon4
              name="settings"
              size={20}
              color={color}
            />
        ),
      }}
    /> */}
    <Tab.Screen
  name="Settings"
  options={{
    tabBarLabel: 'Settings',
    tabBarIcon: ({ color, size }) => (
      <Icon4
        name="settings"
        size={20}
        color={color}
      />
    ),
  }}
>
  {(props) => (
    <SettingsScreen
      clicked={clicked}
      {...props}
    />
  )}
</Tab.Screen>

    
  </Tab.Navigator>
</View>
    </NavigationContainer>
   );
}
 
export default App;

