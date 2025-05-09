import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

// Hábitos diários
const getCurrentWeekDates = () => {
  const currentDate = new Date();
  const firstDayOfWeek = currentDate.getDate() - currentDate.getDay();
  const weekDates = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date(currentDate.setDate(firstDayOfWeek + i));
    weekDates.push(date.toLocaleDateString());
  }

  return weekDates;
};

const daysOfWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

const DailyHabits = () => {
  const [habit, setHabit] = useState('');
  const [habits, setHabits] = useState({});
  const [weekDates, setWeekDates] = useState([]);

  useEffect(() => {
    setWeekDates(getCurrentWeekDates());
  }, []);

  const addHabit = (dayIndex) => {
    if (habit.length > 0) {
      const newHabit = { id: Date.now().toString(), text: habit, completed: false };
      setHabits((prevHabits) => {
        const dayHabits = prevHabits[dayIndex] || [];
        return { ...prevHabits, [dayIndex]: [...dayHabits, newHabit] };
      });
      setHabit('');
    }
  };

  const toggleHabitCompletion = (dayIndex, id) => {
    setHabits((prevHabits) => {
      const dayHabits = prevHabits[dayIndex].map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      );
      return { ...prevHabits, [dayIndex]: dayHabits };
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hábitos Diários</Text>
      {daysOfWeek.map((day, index) => (
        <View key={index} style={styles.dayContainer}>
          <Text style={styles.dayTitle}>
            {day} - {weekDates[index]}
          </Text>
          <TextInput
            style={styles.input}
            placeholder={`Adicionar hábito para ${day}...`}
            value={habit}
            onChangeText={setHabit}
          />
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => addHabit(index)}
          >
            <Text style={styles.addButtonText}>Adicionar</Text>
          </TouchableOpacity>
          <FlatList
            data={habits[index] || []}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => toggleHabitCompletion(index, item.id)}>
                <Text style={[styles.habitItem, item.completed && styles.completedHabit]}>
                  {item.text}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#D5F2DC',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#261A23',
  },
  dayContainer: {
    marginBottom: 20,
  },
  dayTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#261A23',
  },
  input: {
    borderColor: '#261A23',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    color: '#261A23',
  },
  addButton: {
    backgroundColor: '#F2BBBF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  addButtonText: {
    color: '#261A23',
    fontWeight: 'bold',
    fontSize: 16,
  },
  habitItem: {
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
    color: '#261A23',
  },
  completedHabit: {
    textDecorationLine: 'line-through',
    color: '#261A23',
  },
});

export default DailyHabits;