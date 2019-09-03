// Index.ios.js - place code in here ti IOS!!!

// Import a library to help create a component
import React from 'react';
import { Text, AppRegistry }  from 'react-native';

// Create a component
const App = () => (
        <Text>Some text</Text>
);

// Render ir to the device
AppRegistry.registerComponent('albums', () => App);
