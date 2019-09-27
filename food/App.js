import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const navigator = createStackNavigator(
	{
		Search: SearchScreen,
		ResultShow: ResultsShowScreen
	}, {
		initialRouteName: 'Search',
		defaultNavigationOptions: {
			title: "BussinessSearch"
		}
	}
);

export default createAppContainer(navigator);