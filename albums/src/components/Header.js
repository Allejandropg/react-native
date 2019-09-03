// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = (props) => {
    const { viewStyle, textStyle } = styles;
    return  (
        <View style={viewStyle} >
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

// F8F8F8
const styles = {
    viewStyle :{
        position: 'relative',
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity : 0.2,
        elevation: 2
    },
    textStyle : {
        fontSize : 20
    }
};

// Make the component available to other parts of the app
export default Header;