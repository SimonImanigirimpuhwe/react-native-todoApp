import React, { useState } from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import Form from './components/todoForm';


export default  function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([
    {text:'buy coffee', key: '1', completed: false},
    {text:'create an app', key: '2', completed: false},
    {text:'play on the switch', key: '3', completed: false}
  ]);
  
  const handlePress = (key) => {
    Alert.alert('Success', 'Todo item deleted successfully', [
      {text: 'Confirm'}
    ])
    setTodos((prevTodo) => {
      return prevTodo.filter((todo) => todo.key != key)
    })
  };
  
  const handleComplete = (key) => {
    setTodos(todos.map((todo) => {
      if (todo.key === key) {
        Alert.alert('Success', 'Todo marked with apposite status', [
          {text: 'Understood'}
        ])
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo;
    }))
  };

  const handleSubmit = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [
          {text, key: Math.random().toString()},
          ...prevTodos
        ]
      })
      setText('')
      console.log(text)
    } else {
      Alert.alert('Ooops!', 'A todo must be at least 3 characters long!', [
        {text: 'Understood', onPress: () => console.log('Alert closed')}
      ])
    }
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header  />
        <View style={styles.content}>
          <Form handleSubmit={handleSubmit} text={text} setText={setText}/>
          <View style={styles.list}>
            <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} handlePress={handlePress} handleComplete={handleComplete}/>
            )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 40
  },
  list: {
    flex:1,
    marginTop: 40
  },
});
