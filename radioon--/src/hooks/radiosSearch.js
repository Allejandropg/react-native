import { useState, useEffect } from 'react';
import axios from 'axios';

export default () => {
    const [radios, setRadios] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async () => {
        try{
           await axios.get('http://radioontv.com.br/ws/radios-destaques.php')
                        .then(results => {
                            const { destaques } = results.data;
                            setRadios(destaques);
						});
        }catch(err){
            setErrorMessage(`Something went wong ${err}`) 
        }
    }; 

    useEffect(() => {
        console.log('Radio effect')
        searchApi();
        
    }, [errorMessage]);

    // return [ radios, errorMessage ];
    return { searchApi, radios, errorMessage };//Olhar RadiosScreeen para saber o motivo de estar comentado
}