import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {DrawerActionType} from 'react-navigation-drawer';
import {EvilIcons} from 'react-native-vector-icons/EvilIcons';

const styles = StyleSheet.create({
  iconStyle: {
    fontSize: 25,
    alignSelf: 'center',
    marginHorizontal: 15,
    color: '#FFF',
  },
  title: {
    textAlign: 'center',
  },
});
const Burguer = ({navigation}) => {
  const [icone, setIcone] = useState('navicon');
  return (
    <EvilIcons
      name={icone}
      style={styles.iconStyle}
      onPress={() => navigation.dispatch(DrawerActionType.openDrawer())}
    />
  );
};
export default Burguer;
