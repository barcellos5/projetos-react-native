import React from 'react';
import { View, Text } from 'react-native';
import Estilo from './Estilo';

export default function Resultado({ numeros, mensagem }) {
  return (
    <View style={{ alignItems: 'center', marginTop: 20 }}>
      <Text style={Estilo.FontGrande}>Números Sorteados:</Text>
      <Text style={Estilo.FontMedia}>{numeros.length ? numeros.join(', ') : 'Nenhum número gerado'}</Text>
      <Text style={mensagem.includes('ganhou') ? Estilo.Erro : Estilo.Acerto}>
        {mensagem}
      </Text>
    </View>
  );
}