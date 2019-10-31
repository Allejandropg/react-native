import React from 'react';
import { View, StyleSheet,  Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
 
const DrawerList = ({ navigation }) => {
    //Array of the sidebar navigation option with icon and screen to navigate
    //This screens can be any screen defined in Drawer Navigator in App.js
    //You can find the Icons from here https://material.io/tools/icons/
    const items = [
        {
            icon:'radio',// radio MaterialCommunityIcons
            iconType:'MaterialCommunityIcons',
            navOptionName: 'Rádios',
            screenToNavigate: 'Radios',
        },{
            icon:'star',/* star MaterialCommunityIcons */
            iconType:'MaterialCommunityIcons',
            navOptionName: 'Rádios Mais ouvidas',
            screenToNavigate: 'Radios',
        },{
            icon:'camcorder',/* video-camera FontAwesom | tv Feather */
            iconType:'MaterialCommunityIcons',
            navOptionName: 'TV',
            screenToNavigate: 'TVS',
        },{
            icon:'heart',
            iconType:'MaterialCommunityIcons',
            navOptionName: 'Favoritos',
            screenToNavigate: 'Favorito',
        },{
            icon:'shopping-bag',/*  bag SimpleLineIcons */
            iconType:'Feather',
            navOptionName: 'Segmentos',
            screenToNavigate: 'Segmento',
        },{
            icon:'globe-model',
            iconType:'MaterialCommunityIcons',
            navOptionName: 'Rádios do Brasil',
            screenToNavigate: 'Radios',
        },{
            icon:'globe-model',
            iconType:'MaterialCommunityIcons',
            navOptionName: 'Rádios internacionais',
            screenToNavigate: 'Radios',
        },{
            icon:'more-horizontal',/** more-horizontal Feather */
            iconType:'Feather',
            navOptionName: 'Mais',
            screenToNavigate: 'Option',
        },
    ];
    return (
        <View style={styles.sideMenuContainer}>
            {/*Setting up Navigation Options from option array using loop*/}
            <View style={{ width: '100%' }}>
                {items.map((item, key) => (
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingTop: 10,
                            paddingBottom: 10,
                            backgroundColor: global.currentScreenIndex === key ? '#e0dbdb' : '#ffffff',
                        }}
                        key={key}
                    >
                    <View style={{ marginRight: 10, marginLeft: 20 }}>
                        {item.iconType=="MaterialCommunityIcons"?<MaterialCommunityIcons name={item.icon} size={25} color="#808080" />:<Feather name={item.icon} size={25} color="#808080" />}
                    </View>
                    <Text
                        style={{
                            fontSize: 15,
                            color: global.currentScreenIndex === key ? 'red' : 'black',
                        }}
                        onPress={() => {
                            global.currentScreenIndex = key;
                            navigation.navigate(item.screenToNavigate);
                        }}>
                        {item.navOptionName}
                    </Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    sideMenuContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 20,
    },
});

export default withNavigation(DrawerList);