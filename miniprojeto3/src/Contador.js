import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import estilo from './estilo';

export default function Contador({ onConfirm, onDecline }) {
  const [adultos, setAdultos] = useState(0);
  const [criancas, setCriancas] = useState(0);
  const [idosos, setIdosos] = useState(0);

  const totalPessoas = adultos + criancas + idosos;

  return (
    <View style={estilo.container}>
      <Text style={estilo.FontGrande}>Confirmação de Presença</Text>

      <View style={styles.counterContainer}>
        <Text style={estilo.contadorText}>Adultos: {adultos}</Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.counterButton}
            onPress={() => setAdultos(adultos + 1)}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.counterButton}
            onPress={() => setAdultos(adultos > 0 ? adultos - 1 : 0)}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.counterContainer}>
        <Text style={estilo.contadorText}>Crianças: {criancas}</Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.counterButton}
            onPress={() => setCriancas(criancas + 1)}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.counterButton}
            onPress={() => setCriancas(criancas > 0 ? criancas - 1 : 0)}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.counterContainer}>
        <Text style={estilo.contadorText}>Idosos: {idosos}</Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.counterButton}
            onPress={() => setIdosos(idosos + 1)}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.counterButton}
            onPress={() => setIdosos(idosos > 0 ? idoso - 1 : 0)}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={estilo.FontGrande}>Total de Pessoas: {totalPessoas}</Text>

      <TouchableOpacity
        style={styles.confirmButton}
        onPress={() => onConfirm(adultos, criancas, idosos)}
      >
        <Text style={styles.buttonText}>Enviar Confirmação</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.declineButton}
        onPress={onDecline}
      >
        <Text style={styles.buttonText}>Não Poderei Ir</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  counterContainer: {
    marginVertical: 8,
    alignItems: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 5,
  },
  counterButton: {
    backgroundColor: '#B6C6BE',
    padding: 8,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#008080',
    fontWeight: 'bold',
  },
  confirmButton: {
    marginTop: 15,
    padding: 10,
    backgroundColor: '#fffdd0',
    borderRadius: 10,
  },
  declineButton: {
    marginTop: 8,
    padding: 10,
    backgroundColor: '#FF6347',
    borderRadius: 10,
  },
});