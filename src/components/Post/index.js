import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';

export default function Post() {
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        style={styles.image}
        source={{
          uri: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bHV4dXJ5JTIwaG91c2V8ZW58MHx8MHx8fDA%3D',
        }}
      />

      {/* Bed ND bEDROOM */}
      <Text style={styles.bedrooms}>1bed · 1bedroom</Text>

      {/* tYPE AND description */}
      <Text style={styles.desc} numberOfLines={2}>
        A very good place for keeping your self busy, and it has all you can
        think of, a swimming pool, a dog house and a generator house for keeping
        your generator
      </Text>
      {/* old price and new price  */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>30000 NGN </Text>
        <Text style={styles.newPrice}> 20000 NGN</Text> / night
      </Text>
      {/* Total price */}
      <Text style={styles.totalPrice}> 80000 NGN Total 😊</Text>
    </View>
  );
}
