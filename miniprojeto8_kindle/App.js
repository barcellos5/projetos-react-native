import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Inicio from './src/views/Inicio';
import Biblioteca from './src/views/Biblioteca';
import LeituraAtual from './src/views/LeituraAtual';
import Explorar from './src/views/Explorar';
import Mais from './src/views/Mais';

const Drawer = createDrawerNavigator();

function MeuDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Início"
      screenOptions={{
        drawerActiveTintColor: '#468C26',
        drawerActiveBackgroundColor: '#D99873',
        headerTintColor: '#333', 
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Drawer.Screen name="Início" component={Inicio} />
      <Drawer.Screen name="Biblioteca" component={Biblioteca} />
      <Drawer.Screen name="Leitura Atual" component={LeituraAtual} />
      <Drawer.Screen name="Explorar" component={Explorar} />
      <Drawer.Screen name="Dicas e Curiosidades" component={Mais} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MeuDrawer />
    </NavigationContainer>
  );
}