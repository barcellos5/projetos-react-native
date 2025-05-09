import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function SobremesasScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobremesas</Text>

      <View style={styles.itemContainer}>
        <Image source={require('../imagens/bolo_de_rolo.jpg')} style={styles.itemImage} />
        <View style={styles.itemText}>
          <Text style={styles.itemName}>Bolo de Rolo</Text>
          <Text style={styles.itemPrice}>R$ 15,00</Text>
        </View>
      </View>

      <View style={styles.itemContainer}>
        <Image source={require('../imagens/bolo_mandioca.jpg')} style={styles.itemImage} />
        <View style={styles.itemText}>
          <Text style={styles.itemName}>Bolo de Macaxeira</Text>
          <Text style={styles.itemPrice}>R$ 12,00</Text>
        </View>
      </View>

      <View style={styles.itemContainer}>
        <Image source={require('../imagens/munguza.jpg')} style={styles.itemImage} />
        <View style={styles.itemText}>
          <Text style={styles.itemName}>Mungunzá</Text>
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