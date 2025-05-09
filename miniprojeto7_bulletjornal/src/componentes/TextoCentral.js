import React from 'react';
import { View, Text } from 'react-native';

export default ({ corFundo = '#D5F2DC', corTexto = '#261A23', children }) => (
  <View style={{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: corFundo,
    padding: 20,
  }}>
    <Text style={{
      fontSize: 30,
      color: corTexto,
      fontFamily: 'System',
      textAlign: 'center',
    }}>
      {children}
    </Text>
  </View>
);