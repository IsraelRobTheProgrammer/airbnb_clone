import {View, TextInput, FlatList, Text} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import searchRes from '../../../assets/search';
import Entypo from 'react-native-vector-icons/Entypo';

const LocationSearch = props => {
  const [textInput, setTextInput] = useState('');
  return (
    <View style={styles.container}>
      {/* TextInput */}
      <TextInput
        style={styles.textInput}
        placeholder="Where are you going?"
        value={textInput}
        onChange={setTextInput}
      />

      <FlatList
        data={searchRes}
        renderItem={({item}) => (
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo name={'location-pin'} size={30} />
            </View>
            <Text style={styles.locationText}> {item.description} </Text>
          </View>
        )}
      />
    </View>
  );
};

export default LocationSearch;
