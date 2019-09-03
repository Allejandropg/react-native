import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return (
        <View style={[styles.containerStyle,props.style]}>{props.children}</View>
    );
};

const styles = {
    containerStyle: {
        position:'relative',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        padding: 5,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor:'#ddd',
    }
};

export { CardSection };