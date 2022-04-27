import { Animated, ScrollView, View, Text } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

const AnimateScrollView = () => {

  const [ headerShown, setHeaderShown ] = useState(false)
  const translation = useRef( new Animated.Value(-100)).current

  useEffect(() => {
      Animated.timing(translation, {
          toValue: headerShown ? 0 : -100,
          duration: 250,
          useNativeDriver: true,
      }).start();

  }, [headerShown])
  return (
    <>
      <View
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 60,
            zindex: 999,
            backgroundColor: 'tomato',
            transform: [
                { translateY: headerShown ? 0 : -100 },
            ],
        }}
      >
          <Text style={{fontSize: 24, textAlign: 'center', marginTop: 10}}>MENU</Text>
      </View>

      <ScrollView
        onScroll={(event) => {
          const scrolling = event.nativeEvent.contentOffset.y;
          
          if (scrolling > 100) {
            setHeaderShown(true);
          } else {
            setHeaderShown(false);
          }
        }}
        // onScroll will be fired every 16ms
        scrollEventThrottle={16}
        style={{ flex: 1 }}
      >
        <View style={{ flex: 1, padding: 20}}>
          <Text style={{fontSize: 24, marginBottom: 20}}>Title 1</Text>
          <Text style={{fontSize: 18}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, consectetur quod aliquam animi, maxime, illo labore aut dolore ea repellendus doloremque magnam molestiae qui nisi dicta odit harum veniam alias tenetur accusantium facere praesentium at eaque deserunt? Dicta fugiat, dolor sequi numquam neque ea maxime dolore voluptas repudiandae harum commodi reprehenderit libero cumque qui veritatis nobis, quasi ab eligendi quis saepe amet ut doloremque? Enim iste impedit quos qui maxime minima tenetur ipsum voluptatum porro harum suscipit nemo ea soluta quod maiores non, ducimus corrupti, modi dignissimos optio? Temporibus magni at voluptatem nostrum iure omnis aut perspiciatis et laudantium reiciendis.</Text>

          <Text style={{fontSize: 24, marginBottom: 20, marginTop: 20,}}>Title 2</Text>
          <Text style={{fontSize: 18}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, consectetur quod aliquam animi, maxime, illo labore aut dolore ea repellendus doloremque magnam molestiae qui nisi dicta odit harum veniam alias tenetur accusantium facere praesentium at eaque deserunt? Dicta fugiat, dolor sequi numquam neque ea maxime dolore voluptas repudiandae harum commodi reprehenderit libero cumque qui veritatis nobis, quasi ab eligendi quis saepe amet ut doloremque? Enim iste impedit quos qui maxime minima tenetur ipsum voluptatum porro harum suscipit nemo ea soluta quod maiores non, ducimus corrupti, modi dignissimos optio? Temporibus magni at voluptatem nostrum iure omnis aut perspiciatis et laudantium reiciendis.</Text>

          <Text style={{fontSize: 24, marginBottom: 20, marginTop: 20,}}>Title 3</Text>
          <Text style={{fontSize: 18}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, consectetur quod aliquam animi, maxime, illo labore aut dolore ea repellendus doloremque magnam molestiae qui nisi dicta odit harum veniam alias tenetur accusantium facere praesentium at eaque deserunt? Dicta fugiat, dolor sequi numquam neque ea maxime dolore voluptas repudiandae harum commodi reprehenderit libero cumque qui veritatis nobis, quasi ab eligendi quis saepe amet ut doloremque? Enim iste impedit quos qui maxime minima tenetur ipsum voluptatum porro harum suscipit nemo ea soluta quod maiores non, ducimus corrupti, modi dignissimos optio? Temporibus magni at voluptatem nostrum iure omnis aut perspiciatis et laudantium reiciendis.</Text>
        </View>
      </ScrollView>
    
    </>
  )
}

export default AnimateScrollView
