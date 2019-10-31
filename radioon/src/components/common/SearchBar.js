import React from 'react';
import { View, TextInput, StyleSheet,Dimensions } from 'react-native';
import {Feather} from '@expo/vector-icons';
const { width, height } = Dimensions.get('window');

const SearchBar = () => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle} 
                placeholder="Search" 
                value={''}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundStyle: {
      position:'absolute',
      left:0,
      bottom:18,
      flex:1,
      backgroundColor: '#Fff',
      width,
      height: 50,
      borderRadius: 5,
      flexDirection: 'row',
      borderColor:"#f27b36",
      borderBottomWidth:8
    },
    inputStyle: {
      flex:1,
      fontSize: 18
    },
    iconStyle: {
      fontSize: 35,
      alignSelf: 'center',
      marginHorizontal: 15
    }
});

export default SearchBar;
