import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './globalStyles';

export default function ProductDetails({ route, navigation }) {
  // Receive the product object passed through route.params
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.name}</Text>

      <Text style={styles.detailLabel}>Price</Text>
      <Text style={styles.price}>₱{product.price.toLocaleString()}</Text>

      <Text style={styles.detailLabel}>Description</Text>
      <Text style={styles.description}>{product.description}</Text>

      {/* Manual reverse navigation */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Go Back to Products</Text>
      </TouchableOpacity>
    </View>
  );
}
