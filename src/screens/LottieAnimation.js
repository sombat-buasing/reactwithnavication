import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

const LottieAnimation = () => {

    const wolverine = require('./../assets/animations/wolverine.json')
    const loader = require('./../assets/animations/loader.json')

  return (
    <SafeAreaView style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{width: 200, height: 200}}>
          <LottieView source={require('./../assets/animations/cactus.json')} autoPlay loop />
      <Text>LottieAnimation</Text>
      </View>
      <LottieView source={loader} style={{width:200, height: 200}} autoPlay loop />
      <LottieView source={wolverine} style={{width:200, height: 200}} autoPlay loop />

    </SafeAreaView>
  )
}

export default LottieAnimation

const styles = StyleSheet.create({})