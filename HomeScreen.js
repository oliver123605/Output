import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './globalStyles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Mini Store</Text>
      <Text style={styles.text}>
        Browse our products and select an item to see its details.
      </Text>

      {/* Move forward to the product list */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ProductList')}
      >
        <Text style={styles.buttonText}>Browse Products</Text>
      </TouchableOpacity>
    </View>
  );
}
