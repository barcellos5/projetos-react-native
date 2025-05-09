import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Estilo from './Estilo';

export default (comp) => {
  return (
    <View>
      <Text style={Estilo.FontGrande}>{comp.principal}</Text>
      <Text style={Estilo.FontMedia}>{comp.secundario}</Text>
    </View>
  );
};