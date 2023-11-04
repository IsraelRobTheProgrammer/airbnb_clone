import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
    // backgroundColor: 'black',
  },
  textInput: {
    color: 'black',
    fontSize: 20,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10, // 15
    borderBottomWidth: 0.34,
    borderColor: 'lightgray',
  },
  iconContainer: {
    backgroundColor: '#e7e7e7',
    padding: 5,
    borderRadius: 5,
    marginRight: 12,
  },
  locationText: {
    // fontWeight: 'bold',
    color: 'black',
  },
});

export default styles;
