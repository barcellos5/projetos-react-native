import React, { useState } from 'react';
import { Text, TextInput, View, Button, StyleSheet } from 'react-native';

const miniProjeto1 = () => {
  const [dataNascimento, setDataNascimento] = useState('');

  const calcularIdade = () => {
    const [dia, mes, ano] = dataNascimento.split('/');
    const dataNasc = new Date(ano, mes - 1, dia);
    const hoje = new Date();
    let idade = hoje.getFullYear() - dataNasc.getFullYear();
    const mesDiferenca = hoje.getMonth() - dataNasc.getMonth();

    if (mesDiferenca < 0 || (mesDiferenca === 0 && hoje.getDate() < dataNasc.getDate())) {
      idade--;
    }

    let classificacao;
    if (idade <= 19) {
      classificacao = 'Jovem';
    } else if (idade >= 20 && idade <= 59) {
      classificacao = 'Adulto';
    } else {
      classificacao = 'Idoso';
    }

    alert(`Sua idade é ${idade} anos. Classificação: ${classificacao}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculador de Idade</Text>
      <Text>Digite sua data de nascimento (DD/MM/YYYY)</Text>
      <TextInput
        style={styles.input}
        value={dataNascimento}
        onChangeText={setDataNascimento}
        placeholder="DD/MM/YYYY"
        keyboardType="numeric"
      />
      <Button title="Calcular" onPress={calcularIdade} color="#4CC9F0" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F3F4F6',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    color: '#F72585',
  },
  input: {
    height: 40,
    borderColor: '#3A0CA3',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    width: '80%',
    color: '#000000',
  },
});

export default miniProjeto1;