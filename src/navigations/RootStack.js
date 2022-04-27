import React from 'react'
import { createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import AnimateAPI from '../screens/AnimateAPI';
import AnimateType from '../screens/AnimateType';
import AnimateScrollView from '../screens/AnimateScrollView';
import Animateble from '../screens/Animateble';
import AnimatebleMakeRain from '../screens/AnimatebleMakeRain';
import LottieAnimation from '../screens/LottieAnimation';

const Stack = createStackNavigator()

const RootStack = () => {
  return (
   <Stack.Navigator initialRouteName='LottieAnimation'>
       <Stack.Screen name="Home" component={Home} />
       <Stack.Screen name="AnimateAPI" component={AnimateAPI} />
       <Stack.Screen name="AnimateType" component={AnimateType} />
       <Stack.Screen name="AnimateScrollView" component={AnimateScrollView} />
       <Stack.Screen name="Animateble" component={Animateble} />
       <Stack.Screen name="AnimatebleMakeRain" component={AnimatebleMakeRain} />
       <Stack.Screen name="LottieAnimation" component={LottieAnimation} />
   </Stack.Navigator>
  )
}

export default RootStack