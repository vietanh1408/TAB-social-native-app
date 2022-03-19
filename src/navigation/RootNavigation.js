import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Login, Register } from '../screens';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name={'Login'} component={Login} />
        <Stack.Screen name={'Register'} component={Register} />
        <Stack.Screen name={'Home'} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
