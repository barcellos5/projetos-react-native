import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function UserDetails({ route }) {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes do Usuário</Text>
      <Text>Nome: {user.nome}</Text>
      <Text>Email: {user.email}</Text>
      <Text>Sexo: {user.sexo}</Text>
      <Text>UF: {user.UF}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
});