import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';
import Titulo from './src/Titulo';

export default () => {
  const [celsius, definirCelsius] = useState('');
  const [fahrenheit, definirFahrenheit] = useState('');
  const [kmh, definirKmh] = useState('');
  const [mph, definirMph] = useState('');

  const conversorTemperatura = () => {
    const tempFahrenheit = (parseFloat(celsius) * 9/5) + 32;
    definirFahrenheit(tempFahrenheit.toFixed(4));
  };

  const conversorVelocidade = () => {
    const velocidadeMph = parseFloat(kmh) / 1.609344;
    definirMph(velocidadeMph.toFixed(4));
  };

  return (
    <View style={styles.App}>
      <Titulo
        principal="Calculadora de Conversão"
        secundario="Temperatura e Velocidade"
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite a temperatura em °C"
          keyboardType="numeric"
          value={celsius}
          onChangeText={definirCelsius}
        />
        <Button
          title="Converter para °F"
          onPress={conversorTemperatura}
          color="#2e006c"
        />
        {fahrenheit !== '' && (
          <Text style={styles.resultado}>
            {celsius}°C é igual a {fahrenheit}°F
          </Text>
        )}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite a velocidade em km/h"
          keyboardType="numeric"
          value={kmh}
          onChangeText={definirKmh}
        />
        <Button
          title="Converter para mph"
          onPress={conversorVelocidade}
          color="#2e006c"
        />
        {mph !== '' && (
          <Text style={styles.resultado}>
            {kmh} km/h é igual a {mph} mph
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  App: {
    backgroundColor: '#FFF8DC',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  inputContainer: {
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: '#2e006c',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: '80%',
    fontFamily: 'Poppins',
    color: '#d74f4f',
  },
  resultado: {
    fontSize: 20,
    fontFamily: 'Poppins',
    color: '#d74f4f',
    marginTop: 10,
  },
});