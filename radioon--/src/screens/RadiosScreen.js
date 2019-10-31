import React from 'react';
// import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet  } from 'react-native';
import radiosSearch from '../hooks/radiosSearch'
import ListItem from '../components/Listitem';
// import axios from 'axios';
import { Spinner } from '../components/common';

const RadiosScreen = () => {
    /**
     * TODO FAZER PESQUISA
     * SearchApi: função que retorna padrão ou com parametro de pesquisa
     * Radios que foram encotradas
     * Mensagem de erro
     */
    const { searchApi, radios, errorMessage } = radiosSearch();
    return (
        <View style={{backgroundColor:"#f0eff4"}}>
            <Text style={styles.text}>Rádio aqui</Text>
            { errorMessage ? <Text style={{textAlign:"center"}}>{errorMessage}</Text> : null }
			{radios.length < 1?<Spinner/>: <FlatList  
						data={ radios } 
						keyExtractor= { (radio) =>  radio.codRadio }  
						renderItem = { ({ item }) =>  <ListItem radio={ item } />  }
						contentContainerStyle={styles.direction} 
						numColumns={3} />  }
        </View>
    );
};

const styles = StyleSheet.create({
	direction:{
		alignItems:"center",
		justifyContent: 'center',
		padding: 10,
		marginBottom: 40
	},
    text: {
        fontSize:18,
        marginTop: '40%',
        textAlign:"center"
    }
});

export default RadiosScreen;