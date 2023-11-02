const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    width: '100%',
    // height: 100,
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  bedrooms: {
    marginVertical: 10,
    fontSize: 16,
    color: '#5b5b5b',
  },
  desc: {
    fontSize: 18,
    lineHeight: 25,
  },
  prices: {
    fontSize: 18,
    marginVertical: 10,
  },
  oldPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'line-through',
  },
  newPrice: {
    fontWeight: 'bold',
    color: 'black',
  },
  totalPrice: {
    color: '#5b5b5b',
    fontSize: 15,
    textDecorationLine: 'underline',
  },
});

export default styles;
