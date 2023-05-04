import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import calender from '../../Assets/images/calender.png';
import clock from '../../Assets/images/clock.png';

const RemiderBox = ({
  show,
  setShow,
  onPress,
  time,
  title,
  description,
  setTitle,
  setDescription,
  day,
  setTime,
  setday,
}) => {
  const navigation = useNavigation();

  return (
    <Modal
      transparent={true}
      visible={show}
      onRequestClose={() => {
        console.log('close modal');
        setShow(false);
      }}>
      <View style={styles.modalBackground}>
        <View style={styles.Wrapper}>
          <Text style={styles.title}>When to remind?</Text>

          <View style={styles.box}>
            <Text numberOfLines={1} style={[styles.textStyle, {width: '90%'}]}>
              {day}
            </Text>
            <TouchableOpacity
              onPress={() => {
                setday();
              }}>
              <Image
                source={calender}
                style={[styles.icon, {width: 35, height: 35}]}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.box}>
            <Text numberOfLines={1} style={[styles.textStyle, {width: '90%'}]}>
              {time}
            </Text>
            <TouchableOpacity
              onPress={() => {
                setTime();
              }}>
              <Image source={clock} style={[styles.icon]} />
            </TouchableOpacity>
          </View>
          <View style={styles.baseBtnContainer}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                setShow(false);
              }}>
              <Text style={styles.textStyle}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btn, {backgroundColor: '#fea347'}]}
              onPress={onPress}>
              <Text style={styles.textStyle}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default RemiderBox;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#0000009E',
  },
  Wrapper: {
    // height: scale(300),
    width: '100%',
    backgroundColor: '#F3F3F3',
    borderRadius: 25,
    padding: scale(15),
  },
  title: {
    color: '#000',
    fontSize: 24,
    fontWeight: '600',
    marginBottom: scale(20),
    marginTop: scale(10),
  },
  box: {
    backgroundColor: '#cfd1d0',
    height: scale(50),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 10,
    marginVertical: 15,
    padding: 10,
  },
  boxInput: {
    backgroundColor: '#cfd1d0',
    height: scale(50),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 10,
    marginVertical: 15,
    // padding: 10,
    paddingLeft: 10,
  },
  icon: {
    width: scale(30),
    height: scale(30),
  },
  textStyle: {
    color: '#000',
    fontSize: 16,
  },
  btn: {
    width: scale(100),
    height: scale(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  baseBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginVertical: 10,
  },
});
