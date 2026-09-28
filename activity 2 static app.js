import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F4F7FB" />
      <ScrollView>
        <Text style={styles.title}>City Spots</Text>
        <Text style={styles.subtitle}>Hello, Alex! Where do you want to go?</Text>

        <View style={styles.searchBox}>
          <Text style={styles.grayText}>Search for a place...</Text>
        </View>

        <Text style={styles.heading}>Categories</Text>
        <View style={styles.categoryRow}>
          <TouchableOpacity style={styles.selectedCategory}>
            <Text style={styles.selectedText}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.category}><Text>Cafes</Text></TouchableOpacity>
          <TouchableOpacity style={styles.category}><Text>Parks</Text></TouchableOpacity>
          <TouchableOpacity style={styles.category}><Text>Shops</Text></TouchableOpacity>
        </View>

        <Text style={styles.heading}>Popular Places</Text>

        <View style={styles.place}>
          <Text style={styles.placeIcon}>☕</Text>
          <View>
            <Text style={styles.placeName}>Morning Coffee</Text>
            <Text style={styles.grayText}>Cafe · 5 min away</Text>
          </View>
          <Text style={styles.rating}>4.8 ★</Text>
        </View>

        <View style={styles.place}>
          <Text style={styles.placeIcon}>🌳</Text>
          <View>
            <Text style={styles.placeName}>Green Park</Text>
            <Text style={styles.grayText}>Park · 10 min away</Text>
          </View>
          <Text style={styles.rating}>4.7 ★</Text>
        </View>

        <View style={styles.place}>
          <Text style={styles.placeIcon}>🍞</Text>
          <View>
            <Text style={styles.placeName}>Sunny Bakery</Text>
            <Text style={styles.grayText}>Bakery · 8 min away</Text>
          </View>
          <Text style={styles.rating}>4.9 ★</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>See more places</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.bottomMenu}>
        <Text style={styles.activeMenu}>Home</Text>
        <Text style={styles.menuText}>Map</Text>
        <Text style={styles.menuText}>Saved</Text>
        <Text style={styles.menuText}>Profile</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7FB',
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#26364A',
    marginHorizontal: 20,
    marginTop: 12,
  },
  subtitle: {
    fontSize: 15,
    color: '#68778A',
    marginHorizontal: 20,
    marginTop: 6,
    marginBottom: 20,
  },
  searchBox: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#DCE3EC',
    borderRadius: 8,
    padding: 14,
    marginHorizontal: 20,
  },
  grayText: {
    color: '#7B8794',
    fontSize: 13,
  },
  heading: {
    color: '#26364A',
    fontSize: 19,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginTop: 24,
    marginBottom: 12,
  },
  categoryRow: {
    flexDirection: 'row',
    marginHorizontal: 16,
  },
  category: {
    backgroundColor: 'white',
    paddingVertical: 9,
    paddingHorizontal: 14,
    borderRadius: 6,
    marginHorizontal: 4,
  },
  selectedCategory: {
    backgroundColor: '#4B83C3',
    paddingVertical: 9,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginHorizontal: 4,
  },
  selectedText: {
    color: 'white',
    fontWeight: 'bold',
  },
  place: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#E1E6ED',
    borderRadius: 8,
    marginHorizontal: 20,
    marginBottom: 10,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  placeIcon: {
    fontSize: 26,
    marginRight: 13,
  },
  placeName: {
    color: '#26364A',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  rating: {
    color: '#D18A32',
    fontSize: 12,
    marginLeft: 'auto',
  },
  button: {
    backgroundColor: '#4B83C3',
    borderRadius: 7,
    padding: 13,
    marginHorizontal: 20,
    marginTop: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  bottomMenu: {
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#E1E6ED',
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  activeMenu: {
    color: '#4B83C3',
    fontWeight: 'bold',
  },
  menuText: {
    color: '#7B8794',
  },
});