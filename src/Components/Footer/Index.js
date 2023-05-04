import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import search from '../../Assets/images/search.png';
import menu from '../../Assets/images/menu.png';
import plus from '../../Assets/images/plus.png';
import {scale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
const Footer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.footerContainer}>
      <Image source={menu} style={styles.imgStyle} />
      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => {
          navigation.navigate('Cookies');
        }}>
        <Image source={plus} style={styles.imgStyle} />
      </TouchableOpacity>
      <Image source={search} style={styles.imgStyle} />
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: scale(70),
    padding: scale(10),
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    backgroundColor: '#ffffff',
    elevation: 10,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 5,
  },
  imgStyle: {
    width: scale(25),
    height: scale(25),
  },
  addBtn: {
    width: scale(50),
    height: scale(50),
    backgroundColor: '#fff',
    elevation: 10,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    top: -40,
  },
});
