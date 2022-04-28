import React, { useContext } from 'react'
import { StyleSheet, Text, TextInput, Button, View, SafeAreaView, Platform } from 'react-native'

// Import Context
import Context from '../store/Context'

// Import Component Cart
import Cart from './../components/Cart'

const Home = () => {

  // เรียกใช้งานของใน Context
  const { counter, increaseCounter, decreaseCounter, user, setUserName } = useContext(Context)

  return (
    <SafeAreaView style={styles.container}>
      <Cart />

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button
          onPress={() => increaseCounter()}
          title={'+ Counter Up'}
          color={'blue'}
        />
        <Text style={{fontSize:60, paddingVertical: 20}}>{counter.value}</Text>
        <Button
          onPress={() => decreaseCounter()}
          title={'- Counter Down'}
          color={'green'}
        />
      </View>

      <View style={{paddingVertical: 20, paddingHorizontal: 20}}>
        <Text style={{ fontSize: 24, paddingVertical: 20 }}>
          User:{user.name}
        </Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText ={text => setUserName(text)}
          value={user.name}
        />
      </View>

    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})