import {View, TextInput, FlatList, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import searchRes from '../../../assets/search';
import Entypo from 'react-native-vector-icons/Entypo';

import EvilIcons from 'react-native-vector-icons/EvilIcons';

import {useNavigation} from '@react-navigation/native';

const LocationSearch = props => {
  const [inputText, setInputText] = useState('');
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* TextInput */}
      <TextInput
        style={styles.textInput}
        placeholder="Where are you going?"
        value={inputText}
        onChange={setInputText}
      />
      {/* list of locations */}
      <FlatList
        data={searchRes}
        renderItem={({item}) => (
          <Pressable
            onPress={() => {
              navigation.navigate('Guests Screen');
            }}
            style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo name={'location-pin'} size={30} />
              {/* <EvilIcons name={"user"}size={25} /> */}
            </View>
            <Text style={styles.locationText}> {item.description} </Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default LocationSearch;
