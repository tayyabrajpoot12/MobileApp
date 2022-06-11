 import React from 'react';
import {View, Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import TopBar from './components/AppBar/AppBar';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup'
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';



 export default function App (){
 
  const Stack = createNativeStackNavigator();

   return(
      <NavigationContainer> 
        <TopBar/>
        <Stack.Navigator initialRouteName='Mobile App' screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Signup' component={Signup} />
          <Stack.Screen name='Dashboard' component={Dashboard} />
        </Stack.Navigator>
      </NavigationContainer>
   )
 
 }