import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, ScrollView  } from 'react-native';
import SearchBar from '../components/SearchBar'
import ResultList from '../components/ResultList'
import useResults from '../hooks/useResults';

const SearchScreen = () => {
    // console.log(props);
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();
    
    const filterResultsByPrice = ( price ) => {
        // price === '$' || '$$' || '$$$'
        return results.filter(results => {
            return results.price === price;
        });
    };

    return (
        <>
            <SearchBar 
                term={term} 
                onTermChange={setTerm} 
                onTermSubmit={() => searchApi(term)}
            />
            { errorMessage ? <Text>{errorMessage}</Text> : null }
            {/* <Text style={{textAlign:'center'}}>We have found {results.length} results</Text> */}
            <ScrollView style={{flex:1}}>
                <ResultList 
                    results={filterResultsByPrice('$')} 
                    title="Cost Effective" 
                />
                <ResultList 
                    results={filterResultsByPrice('$$')} 
                    title="Bit Pricier" 
                />
                <ResultList 
                    results={filterResultsByPrice('$$$')} 
                    title="Big Spender" 
                />
            </ScrollView> 
        </>
    );
}

const styles = StyleSheet.create({});

export default SearchScreen;
