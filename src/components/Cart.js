import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'

// Import Context
import Context from '../store/Context'

const Cart = () => {

  // เรียกใช้งานของใน Context
  const { counter } = useContext(Context)

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Cart ({counter.value})</Text>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'violet',
    paddingVertical: 20, 
  },
  counterText: {
    fontSize: 24, 
    color:'#fff',
    textAlign: 'right',
    marginRight: 30
  },
})