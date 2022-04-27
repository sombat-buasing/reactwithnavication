import React, { useEffect, useRef } from 'react'
import { Animated, Easing } from 'react-native'

const AnimateType = () => {

  const translation = useRef(
    // new Animated.Value(0)
    new Animated.ValueXY({x:0, y:0})
  ).current

  // console.log(translation)

  // Animated.spring
  /*
  useEffect(() => {
    Animated.spring(translation, {
      easing: Easing.bounce,
      toValue: 300,
      // delay: 1000,
      duration: 1000,
      useNativeDriver: true
    }).start()
  }, [])
  */

  // Animated.sequence
  /*
  useEffect(() => {
    Animated.sequence([

      Animated.spring(translation.x, {
        toValue: 300,
        duration: 1000,
        useNativeDriver: true
      }),
      Animated.spring(translation.y, {
        toValue: 560,
        duration: 1000,
        useNativeDriver: true
      }),
      Animated.spring(translation.x, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true
      }),
      Animated.spring(translation.y, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true
      })

    ]).start()
  }, [])
  */

  const firstOpacity = useRef(
    new Animated.Value(0)
  ).current;
  
  const secondOpacity = useRef(
    new Animated.Value(0)
  ).current;
  
  const thirdOpacity = useRef(
    new Animated.Value(0)
  ).current

  useEffect(() => {
    Animated.stagger(1000, [
      Animated.timing(firstOpacity, {
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.timing(secondOpacity, {
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.timing(thirdOpacity, {
        toValue: 1,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);


  return (
    /*
    <Animated.View 
    style={{
      width: 100,
      height: 100,
      // marginLeft: 150,
      backgroundColor: 'orange',
      // transform: [{ translateY: translation }]
      transform: [
        { translateX: translation.x },
        { translateY: translation.y },
      ]
    }} />
    */

    <>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          marginLeft: 150,
          marginTop: 150,
          backgroundColor: 'orange',
          marginBottom: 10,
          opacity: firstOpacity,
        }}
      />
      
      <Animated.View
        style={{
          width: 100,
          height: 100,
          marginLeft: 150,
          backgroundColor: 'orange',
          marginBottom: 10,
          opacity: secondOpacity,
        }}
      />
      
      <Animated.View
        style={{
          width: 100,
          height: 100,
          marginLeft: 150,
          backgroundColor: 'orange',
          opacity: thirdOpacity,
        }}
      />
    </>

  )
}

export default AnimateType