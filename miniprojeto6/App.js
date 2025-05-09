import React from 'react';
import { SafeAreaView, Text, View, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TelaA from './src/views/TelaA';
import TelaB from './src/views/TelaB';
import TelaC from './src/views/TelaC';
import TelaD from './src/views/TelaD';
import TelaE from './src/views/TelaE'; // TelaE contém o Stack Navigator
import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans'; // Minha fonte

const logoImage = require('./src/imagens/logo_portifolio_react_native_1.jpg');

// Tela Principal - Home
function TelaPrincipal() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={logoImage} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.nameText}>Desenvolvimento de Software Multiplataforma</Text>
        <Text style={styles.titleText}>FATEC Itaquera</Text>
      </View>
    </SafeAreaView>
  );
}

// Telas: Calculadora, Conversor, Convite, Jogo, Cardapio
function Calculadora() { return <View style={{ flex: 1 }}><TelaA /></View>; }
function Conversor() { return <View style={{ flex: 1 }}><TelaB /></View>; }
function Convite() { return <View style={{ flex: 1 }}><TelaC /></View>; }
function Jogo() { return <View style={{ flex: 1 }}><TelaD /></View>; }
function Cardapio() { return <View style={{ flex: 1 }}><TelaE /></View>; }  // TelaE - MP5

const Tab = createBottomTabNavigator();

function MinhaTab() {
  return (
    <Tab.Navigator
      initialRouteName="TelaPrincipal"
      screenOptions={{
        tabBarActiveTintColor: '#f5fffa',
        tabBarInactiveTintColor: '#A3D9D9',
        tabBarStyle: { backgroundColor: '#026873' },
      }}>
      <Tab.Screen
        name="Home"
        component={TelaPrincipal}
        options={{
          tabBarLabel: 'HOME',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="MP1"
        component={Calculadora}
        options={{
          tabBarLabel: 'MP1',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calculator" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="MP2"
        component={Conversor}
        options={{
          tabBarLabel: 'MP2',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="thermometer" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="MP3"
        component={Convite}
        options={{
          tabBarLabel: 'MP3',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calendar" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="MP4"
        component={Jogo}
        options={{
          tabBarLabel: 'MP4',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="dice-multiple" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="MP5"
        component={Cardapio}
        options={{
          tabBarLabel: 'MP5',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="silverware-fork-knife" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function AppFINAL() {
  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <MinhaTab />
    </NavigationContainer>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D9D9D9', // Cor de fundo
  },
  image: {
    width: 270,  // Tamanho da imagem
    height: 200,
    marginBottom: 30,
    borderRadius: 10,
  },
  textContainer: {
    width: '80%',
    backgroundColor: '#96E3E9',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  nameText: {
    fontSize: 18,
    fontFamily: 'OpenSans_700Bold',
    textAlign: 'center',
    color: '#024040', // Cor do texto
    marginBottom: 10,
  },
  titleText: {
    fontSize: 18,
    fontFamily: 'OpenSans_400Regular',
    textAlign: 'center',
    color: '#1d2a2a', // Cor do texto
  },
});