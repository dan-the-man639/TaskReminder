import { View, Text, Image, ScrollView, FlatList, Switch } from 'react-native';
import React, { useContext, useState } from 'react';
import { styles } from './styles';
import Footer from '../../Components/Footer/Index';
import { Context } from '../../Components/Context/Context';
import { scale } from 'react-native-size-matters';
const Home = () => {
  const { newTasks } = useContext(Context);
  console.log(newTasks);

  const [status, setStatus] = useState('incomplete');

  const toggleStatus = () => {
    setStatus(status === 'incomplete' ? 'complete' : 'incomplete');
  };

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'flex-end' }}>
        <Image
          source={require('../../Assets/images/avatar.png')}
          style={styles.img}
        />
      </View>
      <Text style={styles.title}>Reminders</Text>
      <FlatList
        data={newTasks}
        // horizontal={true}
        numColumns={2}
        renderItem={({ item, index }) => {
          return (
            <View
              key={index}
              style={[styles.box, { backgroundColor: item.bgColor }]}>
              <Text style={[styles.title, { fontSize: 18 }]}>{item.title}</Text>
              <Text style={styles.textStyle}>{item.description}</Text>
              <View
                style={{
                  borderWidth: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 5,
                  marginVertical: 10,
                }}>
                <Text style={styles.textStyle}>
                  {item.day}
                  {' : '} {item.time}
                </Text>
              </View>
              <View style={{ flexDirection: 'row-reverse' }}>
                <Switch value={status === 'complete'} onValueChange={toggleStatus} />
                {status === 'complete' ? <Text>Complete</Text> : <Text>Incomplete</Text>}
              </View>
            </View>
          );
        }}
      />
      <Footer />
    </View>
  );
};

export default Home;
