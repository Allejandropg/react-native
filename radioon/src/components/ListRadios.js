import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, ScrollView  } from 'react-native';
import { List } from '../components/common'
import SearchBar from '../components/SearchBar'
import ResultList from '../components/ResultList'
import radiosSearch from '../hooks/radiosSearch';

const ListRadios = () => {
    // console.log(props);
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = radiosSearch();
    
    const filterResultsByPrice = ( price ) => {
        // price === '$' || '$$' || '$$$'
        return results.filter(results => {
            return results.price === price;
        });
    };

    return (
        <>
            { errorMessage ? <Text>{errorMessage}</Text> : null }
            {/* <Text style={{textAlign:'center'}}>We have found {results.length} results</Text> */}
            <ScrollView style={{flex:1}}>
                <List
                    results={filterResultsByPrice('$')} 
                    title="Cost Effective" 
                />
            </ScrollView> 
            <SearchBar 
                term={term} 
                onTermChange={setTerm} 
                onTermSubmit={() => searchApi(term)}
            />
        </>
    );
}

const styles = StyleSheet.create({});

export default ListRadios;
