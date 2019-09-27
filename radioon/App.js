import React from 'react';
import { Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import BoxesScreen from './src/screens/BoxesScreen';

const navigator = createStackNavigator(
	{
		Boxes: BoxesScreen,
	}, {
		initialRouteName: 'Boxes',
		defaultNavigationOptions: {
			title: "Radio ON TV",
			headerRight: <Text>teste</Text>
		}
	}
);

export default createAppContainer(navigator);