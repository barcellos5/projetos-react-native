import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

// Lista de livros

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const addBook = () => {
    if (newBook.length > 0 && startDate.length > 0) {
      setBooks([...books, { id: books.length.toString(), title: newBook, startDate, endDate }]);
      setNewBook('');
      setStartDate('');
      setEndDate('');
    }
  };

  const updateBookDates = (id, field, value) => {
    setBooks(books.map(book => 
      book.id === id ? { ...book, [field]: value } : book
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Livros</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Nome do livro..." 
        value={newBook} 
        onChangeText={setNewBook} 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Data de início (dd/mm/aaaa)" 
        value={startDate} 
        onChangeText={setStartDate} 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Data de término (dd/mm/aaaa)" 
        value={endDate} 
        onChangeText={setEndDate} 
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={addBook}
      >
        <Text style={styles.addButtonText}>Adicionar</Text>
      </TouchableOpacity>
      <FlatList 
        data={books}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.bookContainer}>
            <Text style={styles.bookText}>{item.title}</Text>
            <TextInput
              style={styles.dateInput}
              value={item.startDate}
              placeholder="Data de início"
              onChangeText={(text) => updateBookDates(item.id, 'startDate', text)}
            />
            <TextInput
              style={styles.dateInput}
              value={item.endDate}
              placeholder="Data de término"
              onChangeText={(text) => updateBookDates(item.id, 'endDate', text)}
            />
          </View>
        )}
      />
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
  bookContainer: {
    padding: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  bookText: {
    fontSize: 18,
    color: '#261A23',
  },
  dateInput: {
    borderColor: '#261A23',
    borderWidth: 1,
    padding: 8,
    marginBottom: 5,
    borderRadius: 5,
    color: '#261A23',
  },
});

export default BookList;