import { StyleSheet, Text, View, SafeAreaView} from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';


const Animateble = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center"}}>
          <Animatable.View 
            style={styles.card}
            animation="tada"
            easing="ease-in"
            iterationCount='infinite'
            direction="alternate"
            >
          <Text style={styles.whiteText}>SlideInDown Animation</Text>
          </Animatable.View>
      </View>
    </SafeAreaView>
  )
}

export default Animateble

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    card: {
      justifyContent: 'center',
      width: 200,
      height: 200,
      backgroundColor: 'green',
      borderRadius: 20
    },
    whiteText:{
      color: '#fff',
      textAlign: 'center'
    }
})