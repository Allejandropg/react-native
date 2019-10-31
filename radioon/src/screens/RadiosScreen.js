import React,{useState} from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import radiosSearch from '../hooks/radiosSearch';
import Slide from '../components/Slide';
import SearchBar from '../components/common/SearchBar';
import Spinner from '../components/common/Spinner';
import ResultList from '../components/common/ResultList';

const { width, height } = Dimensions.get('window');
const auxHeight = height/3;

const radioPress = (radio) => {
  console.log('radioClick',radio);
}

const slides = [
  {
    imageSrc: require('../../tmp/slide/bg-index.jpg'),
    imageWidth: width,
    imageHeight: (height/2),
    title: 'Hello World',
    subtitle: 'This is a beautiful world',
    titleColor: '#fff',
    subtitleColor: '#fff',
  }
];
/**
 * TODO FAZER PESQUISA
 * SearchApi: função que retorna padrão ou com parametro de pesquisa
 * Radios que foram encotradas
 * Mensagem de erro
 */
const RadiosScreen = () => {
    const { searchApi, radios, errorMessage } = radiosSearch();
    const [term, setTerm] = useState([]);

    return (
      <View style={styles.container}>
        <Slide slides={slides}/>
        { errorMessage ? <Text style={{textAlign:"center"}}>{errorMessage}</Text> : null }
        {radios.length < 1 ? <Spinner/> : <ResultList results={radios}  title="Rádios em Destaques" height={auxHeight} />}
        <SearchBar />
      </View>
    );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#f0eff4",
    height: height-110,
    marginBottom:110
  },
	direction:{
		alignItems:"center",
		justifyContent: 'center',
		padding: 10,
		marginBottom: 100
	},
  text: {
    fontSize:18,
    marginTop: auxHeight,
    textAlign:"center"
  }
});

export default RadiosScreen;