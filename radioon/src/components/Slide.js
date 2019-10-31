import React, { useState, useCallback } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import Carousel  from 'react-native-looped-carousel';


const { width, height } = Dimensions.get('window');

const useComponentSize = () => {
  const [size, setSize] = useState(null);

  const onLayout = useCallback(event => {
    // console.log('event',event)
    const { width, height } = Dimensions.get('window');
    setSize({ width, height:(height/3) });
  }, []);

  return [size, onLayout];
};
const Slide = ({ slides }) => {
  const [size, onLayout] = useComponentSize();
  
  return (
    <View style={{ flex: 1 }} onLayout={onLayout}>
      <Carousel
        delay={2000}
        style={size}
        autoplay
        currentPage={1}
      >
          {slides.map(( slide, key ) => (
            <View style={[{ backgroundColor: '#000' }, size]} key={key}>
              <Image source={slide.imageSrc} style={size}/>
            </View>
          ))}
      </Carousel>
    </View>);
};
/* 
        onAnimateNextPage={p => console.log('onanimate',p)} */
export default Slide;
