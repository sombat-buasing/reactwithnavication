import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './RootStack';

const Navigations = () => {
  return (
    <NavigationContainer>
        <RootStack />
    </NavigationContainer>
    )
}

export default Navigations