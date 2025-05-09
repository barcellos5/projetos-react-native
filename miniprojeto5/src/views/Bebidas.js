import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function BebidasScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bebidas</Text>

      <View style={styles.itemContainer}>
        <Image source={require('../imagens/cajuina.jpg')} style={styles.itemImage} />
        <View style={styles.itemText}>
          <Text style={styles.itemName}>Cajuína</Text>
          <Text style={styles.itemPrice}>R$ 5,00</Text>
        </View>
      </View>

      <View style={styles.itemContainer}>
        <Image source={require('../imagens/guarana_jesus.jpg')} style={styles.itemImage} />
        <View style={styles.itemText}>
          <Text style={styles.itemName}>Guaraná Jesus</Text>
          <Text style={styles.itemPrice}>R$ 7,00</Text>
        </View>
      </View>

      <View style={styles.itemContainer}>
        <Image source={require('../imagens/garapa.jpg')} style={styles.itemImage} />
        <View style={styles.itemText}>
          <Text style={styles.itemName}>Garapa</Text>
          <Text style={styles.itemPrice}>R$ 10,00</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#dcffff',
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    textAlign: 'center',
    color: '#371717',
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#c79d33',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  itemText: {
    flex: 1,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#371717',
  },
  itemPrice: {
    fontSize: 16,
    color: '#888',
  },
});