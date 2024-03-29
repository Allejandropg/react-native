import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
    const { buttonStyle, textStyle }= styles;
    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}> {children}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle : {
        flex:1,
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        borderWidth:1,
        borderColor: '#007aff',
        marginRight:5,
        marginLeft:5,
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        paddingTop: 10,
        paddingBottom: 10
    }
}
export default Button;