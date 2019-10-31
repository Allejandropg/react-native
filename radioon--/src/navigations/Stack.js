import { createStackNavigator } from 'react-navigation-stack';
import Burguer from '../components/common/Burguer';
import RadiosScreen from '../screens/RadiosScreen';
import TVSScreen from '../screens/TVSScreen';
export default () => {
	const StackRadio = createStackNavigator(
		{
			Radios: {
				screen: RadiosScreen,
				navigationOptions: ({ navigation }) => {
					console.log('stackRadioNavigation',navigation);
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
			headerLayoutPreset:"center"
		}
	)
	const StackTV = createStackNavigator(
		{
			TV: {
				screen: TVSScreen,
				navigationOptions: ({ navigation }) => {
					// console.log('burguer navigation',navigation.dispatch)
					return ({headerRight : <Burguer navigation={navigation}/>});
				}
			},
		}, {
			initialRouteName: 'TV',
			defaultNavigationOptions: {
				title: "Radio ON TV",
				headerTitleStyle:{textAlign:'center'}
			},
			headerLayoutPreset:"center"
		}
	)
	return { StackRadio, StackTV };
}