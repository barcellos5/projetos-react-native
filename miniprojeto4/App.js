import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground } from 'react-native';
import Resultado from './src/Resultado';
import Estilo from './src/Estilo';

export default function App() {
  const [numeros, setNumeros] = useState(Array(6).fill(''));
  const [resultado, setResultado] = useState([]);
  const [mensagem, setMensagem] = useState('');

  const gerarNumerosAleatorios = () => {
    const numerosAleatorios = [];
    while (numerosAleatorios.length < 6) {
      const randomNum = Math.floor(Math.random() * 60) + 1;
      if (!numerosAleatorios.includes(randomNum)) {
        numerosAleatorios.push(randomNum);
      }
    }
    return numerosAleatorios;
  };

  const compararNumeros = () => {
    const numerosGerados = gerarNumerosAleatorios();
    setResultado(numerosGerados);
    
    const acertos = numerosGerados.filter(num => numeros.includes(num.toString())).length;

    if (acertos === 6) {
      setMensagem('Sena! Você acertou 6 números!');
    } else if (acertos === 5) {
      setMensagem('Quina! Você acertou 5 números!');
    } else if (acertos === 4) {
      setMensagem('Quadra! Você acertou 4 números!');
    } else {
      setMensagem('Não ganhou, tente novamente.');
    }
  };

  return (
    <ImageBackground 
      source={require('./src/fundo.jpg')} 
      style={styles.backgroundImage} 
    >
      <SafeAreaView style={styles.container}>
        <Text style={Estilo.FontGrande}>Jogo da Mega-Sena</Text>
        <View style={styles.inputContainer}>
          {numeros.map((numero, index) => (
            <TextInput
              key={index}
              style={styles.input}
              keyboardType="numeric"
              maxLength={2}
              value={numero}
              onChangeText={text => {
                const newNumbers = [...numeros];
                newNumbers[index] = text;
                setNumeros(newNumbers);
              }}
            />
          ))}
        </View>

        {/* Botão customizado */}
        <TouchableOpacity style={styles.botao} onPress={compararNumeros}>
          <Text style={styles.textoBotao}>Gerar Resultado</Text>
        </TouchableOpacity>

        <Resultado numeros={resultado} mensagem={mensagem} />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    width: '80%',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#000',
    textAlign: 'center',
    fontSize: 18,
    width: 40,
    marginHorizontal: 5,
  },
  botao: {
    backgroundColor: '#9AA697',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginTop: 20,
  },
  textoBotao: {
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});