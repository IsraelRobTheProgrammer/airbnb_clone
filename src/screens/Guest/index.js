import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const Guests = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View>
        {/* Row 1: Adults */}
        <View style={styles.row}>
          {/* Title */}
          <View>
            <Text style={styles.guest}>Adults </Text>
            <Text style={styles.ageGroup}>Ages: 18 or above</Text>
          </View>

          {/* Buttons with values */}
          <View style={styles.buttonView}>
            <Pressable
              onPress={() => setAdults(Math.max(0, adults - 1))}
              style={styles.button}>
              <Text style={{fontSize: 20}}>-</Text>
            </Pressable>

            <Text style={styles.textNum}>{adults}</Text>

            <Pressable
              onPress={() => setAdults(adults + 1)}
              style={styles.button}>
              <Text style={{fontSize: 17}}>+</Text>
            </Pressable>
          </View>
        </View>

        {/* Row 2: Children*/}
        <View style={styles.row}>
          {/* Title */}
          <View>
            <Text style={styles.guest}>Children </Text>
            <Text style={styles.ageGroup}>Ages: 17 or below</Text>
          </View>

          {/* Buttons with values */}
          <View style={styles.buttonView}>
            <Pressable
              onPress={() => setChildren(Math.max(0, children - 1))}
              style={styles.button}>
              <Text style={{fontSize: 20}}>-</Text>
            </Pressable>

            <Text style={styles.textNum}>{children}</Text>

            <Pressable
              onPress={() => setChildren(children + 1)}
              style={styles.button}>
              <Text style={{fontSize: 17}}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <View>
        <Pressable
          onPress={() => {
            console.warn('hELLO THERE');
          }}
          style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Search</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Guests;
