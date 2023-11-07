import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    height: '100%',
    // backgroundColor: "black",
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    marginHorizontal: 20,
    // paddingHorizontal: 20,
    // backgroundColor: "black",
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

  searchButton: {
    marginBottom: 30,
    backgroundColor: '#f15454',
    alignItems: 'center',
    justifyContent: 'center',
    // width: 480,
    marginHorizontal: 50,
    height: 50,
    borderRadius: 10,
  },
  searchButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
