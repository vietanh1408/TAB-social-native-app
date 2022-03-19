import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Text} from 'react-native';

const Tab = createBottomTabNavigator();

const UITab = () => {
  return (
    <Tab.Navigator>
      <Text> OK </Text>
    </Tab.Navigator>
  );
};

export default UITab;
