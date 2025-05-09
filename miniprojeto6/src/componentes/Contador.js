import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Estilo from './Estilo';

export default function Contador({ onConfirm, onDecline }) {
  const [adultos, setAdultos] = useState(0);
  const [criancas, setCriancas] = useState(0);
  const [idosos, setIdosos] = useState(0);

  return (
    <View style={styles.contadorWrapper}>
      <View style={styles.counterGroup}>
        <View style={styles.counter}>
          <Text style={Estilo.contadorText}>Adultos: {adultos}</Text>
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

        <View style={styles.counter}>
          <Text style={Estilo.contadorText}>Crianças: {criancas}</Text>
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

        <View style={styles.counter}>
          <Text style={Estilo.contadorText}>Idosos: {idosos}</Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={styles.counterButton}
              onPress={() => setIdosos(idosos + 1)}
            >
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.counterButton}
              onPress={() => setIdosos(idosos > 0 ? idosos - 1 : 0)}
            >
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={() => onConfirm(adultos, criancas, idosos)}
        >
          <Text style={styles.buttonText}>Confirmar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.declineButton}
          onPress={onDecline}
        >
          <Text style={styles.buttonText}>Não Poderei Ir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contadorWrapper: {
    alignItems: 'center',
    marginBottom: 20, // Espaçamento inferior dos botões
  },
  counterGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 20, // Espaçamento vertical entre os contadores e outros elementos
  },
  counter: {
    alignItems: 'center',
    marginHorizontal: 10, // Espaçamento horizontal entre os contadores
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 5,
  },
  counterButton: {
    backgroundColor: '#026873',
    padding: 8,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#f5fffa',
    fontWeight: 'bold',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%', // espaçamento lateral dos botões
    marginTop: 20,
  },
  confirmButton: {
    backgroundColor: '#33D1DD',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginRight: 5, // Espaçamento entre os botões
  },
  declineButton: {
    backgroundColor: '#FF6B6B',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
});