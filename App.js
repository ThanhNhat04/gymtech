import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import RootNavigator from './src/navigation/RootNavigator';
import BottomTabNavigator from './src/navigation/BottomTabNavigator'

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}