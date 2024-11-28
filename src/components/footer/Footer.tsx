import React from 'react';
import { View, Text} from 'react-native';
import { styles } from "./FooterStyle";



export function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>By XPTO - Apps </Text>
    </View>
  );
}