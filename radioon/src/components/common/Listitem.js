import React from 'react';
import { 
    Text,  
    View,
    Image,
    StyleSheet
} from 'react-native';
// import { Actions } from 'react-native-router-flux'
import CardSection from './CardSection';

const ListItem = ({ result }) => {
    const { nomeRadio, midiaRadio }  = result;
    // console.log('listagem',radio)
  return (
      <View>
          <CardSection style={styles.card}>
            {/*Top Large Image */}
            <Image source={{ uri: midiaRadio }} style={ styles.radioPhoto } />
            <View style={styles.containerText}>
              <Text style={styles.titleStyle}>{ nomeRadio }</Text>
            </View>
          </CardSection>
      </View>
    );
}
const styles = StyleSheet.create({
	card:{
    flexDirection: 'column',
		justifyContent: 'space-between',
		alignContent:"space-between",
    width:120,
    height:170,
		margin: 10,
		borderRadius:5,
	},
	radioPhoto: {
		height:100,
  },
  containerText:{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    height:60,
  },
  titleStyle: {
		textAlign:"center",
    fontSize: 12,
	},
});

export default ListItem;