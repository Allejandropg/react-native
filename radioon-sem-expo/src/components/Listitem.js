import React from 'react';
import { 
    Text, 
    TouchableWithoutFeedback, 
    View,
	Image,
	StyleSheet
} from 'react-native';
// import { Actions } from 'react-native-router-flux'
import { CardSection } from './common';

const ListItem = ({ radio }) => {
    const { nomeRadio, midiaRadio }  = radio;
    // console.log('listagem',radio)
    return (
        <TouchableWithoutFeedback >
            <View>
                <CardSection style={styles.card}>
                    {/*Top Large Image */}
                    <Image
						source={{ uri: midiaRadio }}
						style={styles.radioPhoto}
                    />
                    <Text style={styles.titleStyle}>{ nomeRadio }</Text>
                </CardSection>
            </View>
        </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
	card:{
        flexDirection: 'column',
		justifyContent: 'space-between',
		alignContent:"space-between",
		width:120,
		margin: 10,
		borderRadius:5,
	},
	radioPhoto: {
		height:100,
		marginBottom:10,
	},
    titleStyle: {
		flex:1,
		textAlign:"center",
		fontSize: 12,        
	},
});

export default ListItem;