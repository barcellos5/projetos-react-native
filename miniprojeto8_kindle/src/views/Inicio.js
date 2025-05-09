import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// Página inicial
const Inicio = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../imagens/capa.jpg')}
        style={styles.logo}
      />
      <Text style={styles.titulo}>Bookly</Text>
      <Text style={styles.subTitulo}>Bem-vindo ao seu leitor digital favorito!</Text>
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D99873',
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 15,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#3b8c24',
    marginBottom: 10,
  },
  subTitulo: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default Inicio;