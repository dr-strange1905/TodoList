// src/App.js
import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, [todos]);

  const fetchTodos = async () => {
    try {
      const { data, error } = await supabase.from('TodoList').select('*');
      if (error) throw error;
      setTodos(data);
    } catch (error) {
      console.error('Error fetching todos:', error.message);
    }
  };

  const addTodo = async (text) => {
    try {
      const { data, error } = await supabase.from('TodoList').insert({ text });
      if (error) throw error;
      setTodos([...todos, data[0]]);
    } catch (error) {
      console.error('Error adding todo:', error.message);
    }
  };
  
  const deleteTodo = async (id) => {
    try {
      const { error } = await supabase.from('TodoList').delete().eq('id', id);
      if (error) throw error;
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error.message);
    }
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  );
}

export default App;

