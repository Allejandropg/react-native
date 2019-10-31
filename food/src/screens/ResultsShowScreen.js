import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');
    
    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() =>{
        getResult(id);
    }, []);

    // const renderImage = () => {
//     return ; 
    // }
    if(!result){
        return null;
    }else{
        console.log(result)
    }
    return ( 
        <View>
            {/* {result.photos.map((photo) => <Image source={{uri: photo}} style={styles.image}/>)} */}
            <Text>{result.name}</Text>
            <FlatList 
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({item}) => {
                    return <Image style={styles.image} source={{ uri: item}} />
                }}
            />
        </View>
    );
};

const styles =  StyleSheet.create({
    image: {
        width: 250,
        height:120,
        borderRadius: 4
    },

});

export default ResultsShowScreen;