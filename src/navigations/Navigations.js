import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './RootStack';
import Context from './../store/Context'

import CounterState from './../store/CounterState'
import UserState from './../store/UserState'

const Navigations = () => {

  const store = { ...CounterState(), ...UserState() }

  return (
    <Context.Provider value={store}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </Context.Provider>
    )
}

export default Navigations