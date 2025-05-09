import React from 'react';
import {View, Text} from 'react-native';

export default comp => (
  <View style={{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: comp.corFundo || '#000'
  }}>
    <Text style={{
      fontSize: 50,
      color: comp.corTexto || '#FFF'
    }}>{comp.children}
    </Text>
  </View>
)