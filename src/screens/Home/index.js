import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';

import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Pressable
        style={styles.searchButton}
        onPress={() => navigation.navigate('Search Locations')}>
        <Fontisto name={'search'} size={25} color={'#f15454'} />
        <Text style={styles.searchButtonText}>Where are you going? </Text>
      </Pressable>

      <ImageBackground
        source={require('../../../assets/img/wallpaper.jpg')}
        style={styles.image}>
        {/* title */}
        <Text style={styles.title}>Go Near</Text>

        <Pressable
          style={styles.button}
          onPress={() => console.warn('Explore button clicked')}>
          <Text style={styles.buttonText}>Explore Nearby Stays </Text>
        </Pressable>
        {/* button */}
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
