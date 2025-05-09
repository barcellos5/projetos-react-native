import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput, Button, Modal } from 'react-native';

// Dias da semana
const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

const generateMonths = () => {
  const currentDate = new Date();
  const months = [];
  for (let i = 0; i < 6; i++) {
    const monthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + i, 1);
    const monthName = monthDate.toLocaleString('pt-BR', { month: 'long' });
    const daysInMonth = new Date(monthDate.getFullYear(), monthDate.getMonth() + 1, 0).getDate();
    months.push({ name: monthName.charAt(0).toUpperCase() + monthName.slice(1), days: daysInMonth });
  }
  return months;
};

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [event, setEvent] = useState('');
  const [eventsList, setEventsList] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const months = generateMonths();

  const handleDayPress = (monthIndex, day) => {
    const currentYear = new Date().getFullYear();
    const monthOffset = new Date().getMonth() + monthIndex;
    const date = `${String(day).padStart(2, '0')}/${String(monthOffset + 1).padStart(2, '0')}/${currentYear}`;
    setSelectedDate({ date, monthIndex });
    setModalVisible(true);
  };

  const handleAddEvent = () => {
    if (selectedDate && event.trim()) {
      const newEvent = { date: selectedDate.date, description: event };
      setEventsList((prevEvents) => {
        const monthEvents = prevEvents[selectedDate.monthIndex] || [];
        return {
          ...prevEvents,
          [selectedDate.monthIndex]: [...monthEvents, newEvent],
        };
      });
      setEvent('');
      setModalVisible(false); 
    }
  };

  const isDateWithEvent = (monthIndex, day) => {
    const currentYear = new Date().getFullYear();
    const monthOffset = new Date().getMonth() + monthIndex;
    const date = `${String(day).padStart(2, '0')}/${String(monthOffset + 1).padStart(2, '0')}/${currentYear}`;
    return eventsList[monthIndex]?.some(event => event.date === date);
  };

  return (
    <ScrollView style={styles.container}>
      {months.map((month, monthIndex) => (
        <View key={monthIndex} style={styles.monthContainer}>
          <Text style={styles.monthName}>{month.name}</Text>
          <View style={styles.weekDaysContainer}>
            {daysOfWeek.map((day, index) => (
              <Text key={index} style={styles.weekDay}>{day}</Text>
            ))}
          </View>
          <View style={styles.daysContainer}>
            {[...Array(month.days)].map((_, dayIndex) => (
              <TouchableOpacity
                key={dayIndex}
                style={[
                  styles.day,
                  isDateWithEvent(monthIndex, dayIndex + 1) && styles.dayWithEvent
                ]}
                onPress={() => handleDayPress(monthIndex, dayIndex + 1)}
              >
                <Text>{dayIndex + 1}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.eventsListContainer}>
            {eventsList[monthIndex] &&
              eventsList[monthIndex].map((item, index) => (
                <Text key={index} style={styles.eventText}>
                  {item.date} - {item.description}
                </Text>
              ))}
          </View>
        </View>
      ))}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              placeholder="Digite o nome do evento..."
              value={event}
              onChangeText={setEvent}
              onSubmitEditing={handleAddEvent} 
            />
            <Button title="Adicionar Evento" onPress={handleAddEvent} />
            <Button title="Cancelar" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#D5F2DC',
  },
  monthContainer: {
    marginBottom: 20,
  },
  monthName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#261A23',
  },
  weekDaysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  weekDay: {
    width: '14.28%',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#261A23',
  },
  daysContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  day: {
    width: '14.28%',
    textAlign: 'center',
    marginVertical: 2,
    paddingVertical: 10,
    backgroundColor: '#F2F2F2',
    borderRadius: 5,
  },
  dayWithEvent: {
    backgroundColor: '#F2BBBF',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    width: '100%',
    marginBottom: 10,
  },
  eventsListContainer: {
    marginTop: 10,
  },
  eventText: {
    fontSize: 16,
    marginVertical: 5,
    color: '#261A23',
  },
});

export default Calendar;