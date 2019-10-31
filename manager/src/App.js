import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk  from 'redux-thunk'; 
import reducers from './reducers';
import Router from './Router';

class App extends Component {
    componentDidMount(){
        const firebaseConfig = {
            apiKey: "AIzaSyC7Ml00rdRDD3e6De6jJCQUEfAjAx_H8Mo",
            authDomain: "manager-fade6.firebaseapp.com",
            databaseURL: "https://manager-fade6.firebaseio.com",
            projectId: "manager-fade6",
            storageBucket: "",
            messagingSenderId: "1033979002949",
            appId: "1:1033979002949:web:9f5e7c56012e91b9"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router  />
            </Provider>
        );
    };
};
export default App;