// Index.ios.js - place code in here to IOS!!!

// Import a library to help create a component
import React from 'react';
import { View, AppRegistry }  from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
    <View style={{flex:1}}>
        <Header headerText={'Albums'} />
        <AlbumList />
    </View>
);

// Render ir to the device
AppRegistry.registerComponent('albums', () => App);
