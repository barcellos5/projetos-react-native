import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function UserForm({ navigation, route }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    if (route.params) {
      const { id, nome, email: userEmail, avatarUrl } = route.params;
      setUserId(id);
      setName(nome);
      setEmail(userEmail);
      setAvatar(avatarUrl);
    }
  }, [route.params]);

  // Função para salvar ou atualizar o usuário
  const saveUser = async () => {
    const newUser = { id: userId || Date.now().toString(), nome: name, email, avatarUrl: avatar };
    try {
      const userData = await AsyncStorage.getItem('users');
      const users = userData ? JSON.parse(userData) : [];
      const updatedUsers = userId
        ? users.map(u => (u.id === userId ? newUser : u))
        : [...users, newUser];

      await AsyncStorage.setItem('users', JSON.stringify(updatedUsers));
      navigation.goBack();
    } catch (error) {
      console.error(error);
    }
  };

  // Limpar o formulário
  const clearForm = () => {
    setName('');
    setEmail('');
    setAvatar('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.header}>{userId ? 'Editar Usuário' : 'Cadastrar Usuário'}</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Avatar URL"
          value={avatar}
          onChangeText={setAvatar}
        />
        <Button title="Salvar" onPress={saveUser} />
        <Button title="Limpar" onPress={clearForm} color="gray" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFE',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
});