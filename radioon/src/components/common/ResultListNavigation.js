import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import Listitem from './Listitem';

const ResultList = ({ title, results, navigation }) => {
    if(!results.length){
        return null
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {/* <Text>Results: {results.length}</Text> */}
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ResultShow', { id: item.id })}> 
                            <Listitem result={item} />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      marginBottom: 5,
    },
    title: {
      marginLeft: 15,
      marginBottom: 5,
      fontSize:18,
      fontWeight: 'bold'
    }
});

export default withNavigation(ResultList);