import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#2d364c',
  },
  contentContainer: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: height,
  },
  heading: {
    color: 'white',
    fontSize: 50,
    fontWeight: '600',
    height: 200
  },
  buttonContainer: {
    flex: 0,
    alignSelf: 'stretch',
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    marginLeft: 45,
    marginRight: 45,
    paddingHorizontal: 80,
  },
  buttonText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
    paddingVertical: 10,
  },
});

export default styles;
