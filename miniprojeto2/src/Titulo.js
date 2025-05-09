import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import estilo from './estilo';

export default (comp) => {
  return (
    <View>
      <Text style={estilo.FontGrande}>{comp.principal}</Text>
      <Text style={estilo.FontMedia}>{comp.secundario}</Text>
    </View>
  );
};