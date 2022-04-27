import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Animated,
  TouchableOpacity,
} from 'react-native'
import React, { useState } from 'react'
import { Value } from 'react-native-reanimated'

const AnimateAPI = () => {
  const value = useState(new Animated.ValueXY({ x: 150, y: 200 }))[0]

  const moveBallUp = () => {
    Animated.timing(value, {
      toValue: { x: 150, y: 50 },
      duration: 500,
      useNativeDriver: false,
    }).start()
  }

  const moveBallDown = () => {
    Animated.timing(value, {
      toValue: { x: 150, y: 350 },
      duration: 500,
      useNativeDriver: false,
    }).start()
  }

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={moveBallUp}>
        <Text style={{ textAlign: 'center', marginTop: 50 }}>Move Up</Text>
      </TouchableOpacity>

      <Animated.View style={value.getLayout()}>
        <View
          style={{
            width: 100,
            height: 100,
            borderRadius: 100 / 2,
            backgroundColor: 'red',
          }} />
      </Animated.View>

        <TouchableOpacity onPress={moveBallDown}>
          <Text style={{ textAlign: 'center', marginTop: 400 }}>Move Down</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default AnimateAPI

const styles = StyleSheet.create({})
