import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './globalStyles';

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 1299,
    description: 'Comfortable wireless headphones with clear sound and a long-lasting battery.',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 1899,
    description: 'A simple smart watch for checking notifications, time, and daily activity.',
  },
  {
    id: 3,
    name: 'Bluetooth Speaker',
    price: 999,
    description: 'A compact portable speaker that is easy to carry and use anywhere.',
  },
];

export default function ProductList({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      <Text style={styles.title}>Product Catalog</Text>

      {products.map((product) => (
        <TouchableOpacity
          key={product.id}
          style={styles.card}
          onPress={() =>
            navigation.navigate('ProductDetails', {
              product: product,
            })
          }
        >
          <Text style={styles.cardTitle}>{product.name}</Text>
          <Text style={styles.price}>₱{product.price.toLocaleString()}</Text>
          <Text style={styles.linkText}>View Details →</Text>
        </TouchableOpacity>
      ))}

      {/* Manual reverse navigation */}
      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
