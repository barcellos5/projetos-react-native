import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ImageBackground } from 'react-native';

// Tela Home
const Home = () => {
  const [name, setName] = useState('');
  const [displayName, setDisplayName] = useState('');

  const handleNameSubmit = () => {
    if (name.trim().length > 0) {
      setDisplayName(name);
      setName('');
    }
  };

  return (
    <ImageBackground
      source={require('../imagens/capa.jpg')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        {!displayName && (
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome..."
            value={name}
            onChangeText={setName}
            onSubmitEditing={handleNameSubmit}
            placeholderTextColor="#261A23"
          />
        )}
        {displayName && (
          <Text style={styles.nameText}>
            {displayName}
          </Text>
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  input: {
    borderColor: '#F2F2F2',
    backgroundColor: '#F2F2F2',
    borderWidth: 1,
    padding: 22,
    borderRadius: 10,
    width: '80%',
    textAlign: 'center',
    color: '#261A23',
    fontSize: 16,
  },
  nameText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#261A23',
    marginTop: 10,
  },
});

export default Home;