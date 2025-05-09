import React from 'react';
import { Button, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Bebidas from './src/views/Bebidas';
import Especialidades from './src/views/Especialidades';
import Sobremesas from './src/views/Sobremesas';

// Tela Principal com navegação para o cardápio
function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('./src/imagens/logo.jpeg')} // Imagem local do logo
        style={styles.logo}
      />
      
      <Text style={styles.title}>Culinária do Sol</Text>
      
      <Text style={styles.subtitle}>Cardápio</Text>
      
      <View style={styles.menu}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Especialidades')}>
          <Text style={styles.buttonText}>Especialidades</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Sobremesas')}>
          <Text style={styles.buttonText}>Sobremesas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Bebidas')}>
          <Text style={styles.buttonText}>Bebidas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Especialidades" component={Especialidades} />
        <Stack.Screen name="Sobremesas" component={Sobremesas} />
        <Stack.Screen name="Bebidas" component={Bebidas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dcffff',
  },
  title: {
    fontSize: 40,
    marginBottom: 10,
    color: '#371717',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 30,
    marginBottom: 20,
    color: '#371717',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 75, // Deixa o contêiner redondo
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  button: {
    backgroundColor: '#c79d33',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#371717',
    fontSize: 18,
  },
});