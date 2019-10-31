import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ placeholder, label, value, onChangeText, secureTextEntry }) => {
    const { containerStyle, labelStyle, inputStyle } = styles;

    return (
        <View style={ containerStyle }>
            <Text style={ labelStyle }>{label}</Text>
            <TextInput 
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false} 
                value={value} 
                onChangeText={onChangeText} 
                style={ inputStyle } />
        </View>
    );
};
const styles = {
    containerStyle: {
        height:40,
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    labelStyle: {
        fontSize:18,
        paddingLeft: 20,
        flex:1
    },
    inputStyle:{
        padding: 1,
        color:"#000",
        paddingRight: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    }
}
export default Input;