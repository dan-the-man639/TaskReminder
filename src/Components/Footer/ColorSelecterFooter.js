import React, {useState} from 'react';
import {Image, Pressable, StyleSheet, View, Dimensions} from 'react-native';
import {scale} from 'react-native-size-matters';
import tick from '../../Assets/images/tick.png';
import check from '../../Assets/images/check.png';

const {height, width} = Dimensions.get('window');

const ColorSelecterFooter = ({onPress, setBgColor}) => {
  const colorsArray = [
    {
      id: 1,
      color: '#ffffff',
    },
    {
      id: 2,
      color: '#fea347',
    },
    {
      id: 3,
      color: '#79cdff',
    },
    {
      id: 4,
      color: '#fea5c3',
    },
    {
      id: 5,
      color: '#1fcdc4',
    },
    {
      id: 6,
      color: '#ffa3a2',
    },
  ];

  const [selectedId, setSelectedId] = useState(1);

  return (
    <View style={styles.container}>
      <Pressable style={styles.okBtn} onPress={onPress}>
        <Image source={tick} style={{width: scale(20), height: scale(20)}} />
      </Pressable>
      <View style={styles.boxContainer}>
        {colorsArray.map((item, i) => (
          <Pressable
            key={i}
            style={[styles.colorBox, {backgroundColor: item.color}]}
            onPress={() => {
              setSelectedId(item.id);
              setBgColor(item.color);
            }}>
            {item.id === selectedId ? (
              <Image source={check} style={styles.img} />
            ) : null}
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default ColorSelecterFooter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    height: scale(100),
    elevation: 10,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 5,
    justifyContent: 'center',
  },
  boxContainer: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorBox: {
    width: scale(40),
    height: scale(40),
    elevation: 3,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: scale(30),
    height: scale(30),
  },
  okBtn: {
    width: scale(50),
    height: scale(50),
    borderRadius: scale(50),
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    position: 'absolute',
    top: -30,
    left: width / 2.5,
  },
});
