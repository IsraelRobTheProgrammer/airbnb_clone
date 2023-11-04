import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    marginHorizontal: 20,
    // paddingHorizontal: 20,
    // padding: 20,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
  },
  guest: {
    fontWeight: 'bold',
    color: 'black',
  },
  ageGroup: {
    color: '#8d8d8d',
  },

  buttonView: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  button: {
    borderWidth: 1,
    width: 28,
    height: 28,
    borderRadius: 14,
    borderColor: '#676767',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textNum: {
    color: 'black',
    marginHorizontal: 16,
    fontSize: 16,
  },
});

export default styles;
