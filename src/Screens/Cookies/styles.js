import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: scale(10),
    // height: '90%',
  },
  title: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: scale(10),
  },
  subtitle: {
    color: '#000',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22,
  },
  header: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    height: scale(70),
  },
  imgStyle: {
    width: scale(25),
    height: scale(25),
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
});

export default styles;
