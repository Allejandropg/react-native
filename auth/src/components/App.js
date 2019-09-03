import React, { Component } from 'react';
import {View, Text } from "react-native";
import firebase from 'firebase';
import {Header, Button, CardSection, Spinner } from './common';
import LoginForm from './LoginForm';

class App extends Component {
	state = {
		loggedIn: null
	};
	componentDidMount() {
		firebase.initializeApp({
			apiKey: "AIzaSyCKmcPiy7VTBXpETWP-gIRDokcs4XeUWRM",
			authDomain: "auth-b45d5.firebaseapp.com",
			databaseURL: "https://auth-b45d5.firebaseio.com",
			projectId: "auth-b45d5",
			storageBucket: "",
			messagingSenderId: "278817943318",
			appId: "1:278817943318:web:d997efb3d039aa29"
		});
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({
					loggedIn: true
				})
			} else {
				this.setState({
					loggedIn: false
				})
			}
		});
	}
	renderContent() {
		switch(this.state.loggedIn){
			case true:
				return ( 
					<CardSection>
						<Button onPress={() => firebase.auth().signOut()}> Log Out </Button> 
					</CardSection>
				);
			case false:
				return <LoginForm />
			default:
				return <Spinner size="large" />
		}
	}
	render() {
		return ( <View>
			<Header headerText="Authentication" />{ this.renderContent() }</View>
		);
	}
};

export default App;