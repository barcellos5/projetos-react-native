import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import Contador from './src/Contador';

export default function App() {
  const [timer, setTimer] = useState({});
  const [totalConfirmados, setTotalConfirmados] = useState(0);

  useEffect(() => {
    const eventDate = new Date('2024-12-31T23:59:59');
    const interval = setInterval(() => {
      const now = new Date();
      const timeLeft = eventDate - now;

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
      const seconds = Math.floor((timeLeft / 1000) % 60);

      setTimer({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleConfirmation = (adultos, criancas, idosos) => {
    const total = adultos + criancas + idosos;
    setTotalConfirmados(prev => prev + total);
    Alert.alert(
      "Confirmação Enviada",
      `Adultos: ${adultos}\nCrianças: ${criancas}\nIdosos: ${idosos}\nTotal de Pessoas: ${total}`
    );
  };

  const handleDecline = () => {
    Alert.alert("Lamentamos que não possa comparecer!");
  };

  return (
    <View style={styles.App}>
      <Text style={styles.title}>Reveillon 2024</Text>
      <Text style={styles.eventInfo}>31/12/2024 às 21:00</Text>

      <View style={styles.timerContainer}>
        <View style={styles.circle}>
          <Text style={styles.timerText}>{timer.days}</Text>
          <Text style={styles.labelText}>dias</Text>
        </View>
        <View style={styles.circle}>
          <Text style={styles.timerText}>{timer.hours}</Text>
          <Text style={styles.labelText}>horas</Text>
        </View>
        <View style={styles.circle}>
          <Text style={styles.timerText}>{timer.minutes}</Text>
          <Text style={styles.labelText}>minutos</Text>
        </View>
        <View style={styles.circle}>
          <Text style={styles.timerText}>{timer.seconds}</Text>
          <Text style={styles.labelText}>segundos</Text>
        </View>
      </View>

      <Contador onConfirm={handleConfirmation} onDecline={handleDecline} />

      <Text style={styles.confirmedText}>Pessoas confirmadas: {totalConfirmados}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  App: {
    backgroundColor: '#B6C6BE',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#008080',
    textAlign: 'center',
  },
  eventInfo: {
    fontSize: 16,
    marginBottom: 15,
    color: '#008080',
  },
  timerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 15,
  },
  circle: {
    backgroundColor: '#fffdd0',
    borderRadius: 40,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  timerText: {
    fontSize: 18,
    color: '#008080',
    fontWeight: 'bold',
  },
  labelText: {
    fontSize: 10,
    color: '#008080',
    marginTop: 3,
  },
  confirmedText: {
    fontSize: 16,
    color: '#008080',
    marginTop: 10,
  },
});