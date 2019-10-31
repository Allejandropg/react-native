import React from 'react';
import {View, Text, StyleSheet  } from 'react-native';
// import AlbumDetail from './AlbumDetail';

// const AlbumList = () => {
const TVSScreen = () => { 
    return (
            <View>
                <Text style={styles.text}>TV aqui</Text>
            </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize:18,
        marginTop: '50%',
        textAlign:"center"
    }
})
export default TVSScreen;