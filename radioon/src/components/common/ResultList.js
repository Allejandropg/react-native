import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ListItem from './Listitem';

const ResultList = ({ title, results,height, navigation }) => {
    return (
        <>
            <Text style={[styles.title,{marginTop:height}]}>{title}</Text>
            {/* <Text>Results: {results.length}</Text> */}
            <FlatList 
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.codRadio}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => console.log({ item })}> 
                            <ListItem result={item} />
                        </TouchableOpacity>
                    );
                }}
                numColumns={3}
                contentContainerStyle={styles.direction} 
            />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
      flex:1,
      marginBottom: 5,
    },
    direction:{
      alignItems:"center",
      justifyContent: 'center',
      padding: 10,
      marginBottom: 40
    },
    title: {
      fontSize:18,
      textAlign:"center",
      marginTop:10
    }
});

export default ResultList;