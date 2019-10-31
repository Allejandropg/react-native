import { useState, useEffect } from 'react';
import axios from 'axios';

export default () => {
    const [tvs, setTvs] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async () => {
        try{
           await axios.get('http://radioontv.com.br/ws/tvs.php')
                        .then(results => {
                            const { destaques } = results.data;
                            setTvs(destaques);
						});
        }catch(err){
            setErrorMessage(`Something went wong ${err}`) 
        }
    }; 

    useEffect(() => {
        console.log('TV effect')
        searchApi();
        
    }, [errorMessage]);

    // return [ tvs, errorMessage ];
    return { searchApi, tvs, errorMessage };//Olhar TvsScreeen para saber o motivo de estar comentado
}