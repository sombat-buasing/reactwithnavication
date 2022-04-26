import { StyleSheet, Text, View , SafeAreaView } from 'react-native'
import React from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize:24}}>Home Screen</Text>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center',
      alignItems: 'center',
      ...Platform.select({
        ios: {
          backgroundColor:'lightgreen'
        },
        android: {
          backgroundColor:'lightblue'
        }
      })
    }
  })