import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React, {useState, useContext} from 'react';
import styles from './styles';
import arrow from '../../Assets/images/left-arrow.png';
import pin from '../../Assets/images/pin.png';
import bell from '../../Assets/images/bell.png';
import qrScan from '../../Assets/images/qr-code.png';
import {scale} from 'react-native-size-matters';
import ColorSelecterFooter from '../../Components/Footer/ColorSelecterFooter';
import RemiderBox from '../../Components/ReminderBox/Index';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Context} from '../../Components/Context/Context';

const Cookies = ({navigation}) => {
  const [show, setShow] = useState(false);
  const [day, setDay] = useState('today');
  const [time, setTime] = useState('after 5 Min,');
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [visible, setVisible] = useState(false);
  const [currentBgColor, setcurrentBgColor] = useState('#ffffff');
  const {newTasks, setNewTasks} = useContext(Context);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setVisible(false);
    setDate(currentDate);
    setDay(selectedDate.toDateString());
  };

  const showMode = currentMode => {
    if (Platform.OS === 'android') {
      setVisible(true);
      // setShow(false);
      // for iOS, add a button that closes the picker
    }
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const handleAddTask = () => {
    const taskToAdd = {
      day: day,
      time: time,
      bgColor: currentBgColor,
      title: title,
      description: description,
    };
    setNewTasks([...newTasks, taskToAdd]);
    setVisible(false);
    setShow(false);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={{flex: 1}}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Image source={arrow} style={styles.imgStyle} />
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Image source={pin} style={styles.imgStyle} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={bell}
              style={[
                styles.imgStyle,
                {marginRight: scale(15), marginLeft: scale(10)},
              ]}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={qrScan} style={styles.imgStyle} />
          </TouchableOpacity>
        </View>
      </View>
      {/* <View style={{flex: 1}}>
        <Text style={styles.title}>Cookies</Text>
        <Text style={styles.subtitle}>
          Remove cookies from the oven before they burn
        </Text>
      </View> */}
      <View style={{flex: 1, width: '100%'}}>
        <View style={styles.boxInput}>
          <TextInput
            style={{width: '90%'}}
            placeholder="Enter Title"
            value={title}
            placeholderTextColor={'#000'}
            onChangeText={txt => setTitle(txt)}
          />
        </View>
        <View style={styles.boxInput}>
          <TextInput
            placeholder="Enter Description"
            value={description}
            style={{width: '90%'}}
            placeholderTextColor={'#000'}
            onChangeText={txt => setDescription(txt)}
          />
        </View>
      </View>
      <RemiderBox
        show={show}
        setShow={setShow}
        onPress={handleAddTask}
        setday={showDatepicker}
        setTime={showTimepicker}
        day={day}
        time={time}
        title={title}
        description={description}
        setTitle={setTitle}
        setDescription={setDescription}
      />
      {visible && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          // is24Hour={true}
          onChange={onChange}
          minimumDate={new Date()}
        />
      )}
      <ColorSelecterFooter
        setBgColor={setcurrentBgColor}
        onPress={() => {
          setShow(true);
        }}
      />
    </View>
  );
};

export default Cookies;
