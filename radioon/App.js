import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { createAppContainer, createSwitchNavigator, NavigationScreenProps } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DrawerList from './src/components/common/DrawerList';
import Burguer from './src/components/common/Burguer';
import RadiosScreen from './src/screens/RadiosScreen';

global.currentScreenIndex = 0;

const StackRadio = createStackNavigator(
	{
		Radios: {
			screen: RadiosScreen,
			navigationOptions: ({ navigation }) => {
				// console.log('stackRadioNavigation',navigation);
				return ({
					headerRight : <Burguer navigation={navigation}/>,
					drawerLabel: "Radio",
				});
			} 
		},
	}, {
		initialRouteName: 'Radios',
		defaultNavigationOptions: {
			title: "Radio ON TV",
			headerTintColor: '#fff',
			headerStyle: {
			backgroundColor: '#f27b36',
			},
    },
    headerTransparent:true,
		headerLayoutPreset:"center"
	}
)

const styles = StyleSheet.create({
  iconStyle: {
    fontSize: 25, 
    alignSelf: 'center',
		marginHorizontal: 15,
	},
	title: {
		textAlign:"center"
	}
}); 


const Drawer = createDrawerNavigator(
	{
		Radios:{
			screen: StackRadio,
			navigationOptions: ({ navigation }) => {
				return ({
					drawerLabel: "Rádios",
					drawerIcon: <MaterialCommunityIcons  name='radio'  />
				});
			}
		},
	}, {
		contentComponent: DrawerList,
		drawerWidth: Dimensions.get('window').width - 130,
		drawerPosition:"right",
		
	}
);
const Tabs = createBottomTabNavigator({ 
	StackRadio: {	
		screen: StackRadio,
		navigationOptions:{
			tabBarLabel:'Rádios',
			tabBarIcon:({tintColor})=>(
				<MaterialCommunityIcons name="radio" color={tintColor} size={24}/>
			)
		}
	}
});
const switchNavigation = createSwitchNavigator({
	HomeTab:Tabs,
	HomeDrawer: Drawer,
})
// console.log('drawer infos',switchNavigation);
export default createAppContainer(switchNavigation);