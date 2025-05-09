import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

// Metas semanais
const getWeeksOfMonth = () => {
  const currentMonth = new Date().getMonth(); // Mês atual
  const currentYear = new Date().getFullYear(); // Ano atual
  const weeks = [];
  let currentDate = new Date(currentYear, currentMonth, 1);

  // primeiro domingo do mês
  while (currentDate.getDay() !== 0) {
    currentDate.setDate(currentDate.getDate() + 1);
  }

  // semanas do mês
  while (currentDate.getMonth() === currentMonth) {
    weeks.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 7);
  }

  return weeks;
};

const WeeklyGoals = () => {
  const [goal, setGoal] = useState('');
  const [goals, setGoals] = useState({});
  const [weeks, setWeeks] = useState([]);

  useEffect(() => {
    setWeeks(getWeeksOfMonth());
  }, []);

  const addGoal = (weekIndex) => {
    if (goal.length > 0) {
      const newGoal = { id: Date.now().toString(), text: goal, completed: false };
      setGoals((prevGoals) => {
        const weekGoals = prevGoals[weekIndex] || [];
        return { ...prevGoals, [weekIndex]: [...weekGoals, newGoal] };
      });
      setGoal('');
    }
  };

  const toggleGoalCompletion = (weekIndex, id) => {
    setGoals((prevGoals) => {
      const weekGoals = prevGoals[weekIndex].map((goal) =>
        goal.id === id ? { ...goal, completed: !goal.completed } : goal
      );
      return { ...prevGoals, [weekIndex]: weekGoals };
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Metas Semanais</Text>
      {weeks.map((weekStart, index) => (
        <View key={index} style={styles.weekContainer}>
          <Text style={styles.weekTitle}>
            Semana {index + 1} - Início: {weekStart.toLocaleDateString()}
          </Text>
          <TextInput
            style={styles.input}
            placeholder={`Adicionar meta para a Semana ${index + 1}...`}
            value={goal}
            onChangeText={setGoal}
          />
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => addGoal(index)}
          >
            <Text style={styles.addButtonText}>Adicionar</Text>
          </TouchableOpacity>
          <FlatList
            data={goals[index] || []}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => toggleGoalCompletion(index, item.id)}>
                <Text style={[styles.goalItem, item.completed && styles.completedGoal]}>
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
    backgroundColor: '#F2BBBF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#261A23',
  },
  weekContainer: {
    marginBottom: 20,
  },
  weekTitle: {
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
    backgroundColor: '#A9D9B5',
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
  goalItem: {
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
    color: '#261A23',
  },
  completedGoal: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
});

export default WeeklyGoals;