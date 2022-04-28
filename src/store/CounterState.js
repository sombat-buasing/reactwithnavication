import React, { useState } from 'react'
import { View, Text } from 'react-native'

const CounterState = () => {

  const [counter, setCounter] = useState({ value: 0 })

  // ฟังก์ชันเพิ่ม counter
  increaseCounter = () => {
    setCounter({...counter, value: counter.value + 1 })
  }

  // ฟังก์ชันลด counter
  decreaseCounter = () => {
    setCounter({...counter, value: counter.value - 1 })
  }

  return{
    counter,
    increaseCounter,
    decreaseCounter,
  }
}

export default CounterState