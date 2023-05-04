import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: scale(10),
  },
  title: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 28,
  },
  img: {
    width: scale(60),
    height: scale(60),
    borderRadius: scale(10),
    marginVertical: scale(20),
  },
  textStyle: {
    color: '#000',
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '400',
  },
  box: {
    width: '45%',

    borderRadius: 10,
    padding: 10,
    elevation: 5,
    marginBottom: 10,
    marginTop: 10,
    marginHorizontal: 4,
    alignSelf: 'center',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
