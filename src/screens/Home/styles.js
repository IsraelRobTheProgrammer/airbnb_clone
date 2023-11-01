const {StyleSheet, Dimensions} = require('react-native');

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 80,
    color: 'white',
    fontWeight: 'bold',
    width: '70%',
    marginLeft: 25,
  },

  button: {
    backgroundColor: 'white',
    width: 170,
    borderRadius: 5,
    marginTop: 25,
    marginLeft: 25,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  searchButton: {
    backgroundColor: 'white',
    width: Dimensions.get("screen").width  - 20,
    borderRadius: 25,
    height: 50,
    flexDirection: 'row',
    gap: 20,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 15,
    zIndex: 100,
  },
  searchButtonText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default styles;
