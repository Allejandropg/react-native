import React from 'react';
import {Dimensions} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Icon} from 'react-native-vector-icons/FontAwesome';
import DrawerList from './src/components/common/DrawerList';
import Burguer from './src/components/common/Burguer';
import RadiosScreen from './src/screens/RadiosScreen';
import TVSScreen from './src/screens/TVSScreen';

const StackRadio = createStackNavigator(
  {
    Radios: {
      screen: RadiosScreen,
      navigationOptions: ({navigation}) => {
        console.log('stackRadioNavigation', navigation);
        return {
          headerRight: <Burguer navigation={navigation} />,
          drawerLabel: 'Radio',
        };
      },
    },
  },
  {
    initialRouteName: 'Radios',
    defaultNavigationOptions: {
      title: 'Radio ON TV',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#f27b36',
      },
    },
    headerLayoutPreset: 'center',
  },
);
const StackTV = createStackNavigator(
  {
    TV: {
      screen: TVSScreen,
      navigationOptions: ({navigation}) => {
        // console.log('burguer navigation',navigation.dispatch)
        return {headerRight: <Burguer navigation={navigation} />};
      },
    },
  },
  {
    initialRouteName: 'TV',
    defaultNavigationOptions: {
      title: 'Radio ON TV',
      headerTitleStyle: {textAlign: 'center'},
    },
    headerLayoutPreset: 'center',
  },
);
// C:\Users\Allejandro\Desktop\react-native\radioon
global.currentScreenIndex = 0;

const Drawer = createDrawerNavigator(
  {
    Radios: {
      screen: StackRadio,
      navigationOptions: ({navigation}) => {
        return {
          drawerLabel: 'Rádios',
          drawerIcon: <Icon name="close-o" />,
        };
      },
    },
    TVs: {
      screen: StackTV,
      navigationOptions: ({navigation}) => {
        return {
          drawerLabel: 'TVs',
          drawerIcon: <Icon name="close-o" />,
        };
      },
    },
  },
  {
    contentComponent: DrawerList,
    drawerWidth: Dimensions.get('window').width - 130,
    drawerPosition: 'right',
  },
);
const Tabs = createBottomTabNavigator({
  StackRadio: {
    screen: StackRadio,
    navigationOptions: {
      tabBarLabel: 'Rádios',
      tabBarIcon: ({tintColor}) => (
        <Icon name="md-compass" color={tintColor} size={24} />
      ),
    },
  },
  StackTV: {
    screen: StackTV,
    navigationOptions: {
      tabBarLabel: 'TV',
      tabBarIcon: ({tintColor}) => (
        <Icon name="md-compass" color={tintColor} size={24} />
      ),
    },
  },
});
const switchNavigation = createSwitchNavigator({
  HomeTab: Tabs,
  HomeDrawer: Drawer,
});
// console.log('drawer infos',switchNavigation);
export default createAppContainer(switchNavigation);
