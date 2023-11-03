import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';

export default function Post(props) {
  // console.log(props);
  const post = props.post;
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        style={styles.image}
        source={{
          uri: post.image,
        }}
      />

      {/* Bed ND bEDROOM */}
      <Text style={styles.bedrooms}>
        {post.bed} bed(s) · {post.bedroom} bedroom(s)
      </Text>

      {/* tYPE AND description */}
      <Text style={styles.desc} numberOfLines={2}>
        {post.type}, {post.title}
      </Text>

      {/* old price and new price  */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>{post.oldPrice} NGN </Text>
        <Text style={styles.newPrice}> {post.newPrice} NGN</Text> / night
      </Text>

      {/* Total price */}
      <Text style={styles.totalPrice}> {post.totalPrice} NGN Total 😊</Text>
    </View>
  );
}
