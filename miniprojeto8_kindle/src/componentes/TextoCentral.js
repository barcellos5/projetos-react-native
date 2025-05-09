import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TextoCentral({ children, corFundo = '#000', corTexto = '#FFF' }) {
  return (
    <View style={[styles.container, { backgroundColor: corFundo }]}>
      <Text style={[styles.text, { color: corTexto }]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
  },
});