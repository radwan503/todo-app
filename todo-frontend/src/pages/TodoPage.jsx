// src/pages/TodosPage.js
import React, { useState, useEffect } from 'react';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import api from '../services/api';

function TodoPage() {
 const [todos, setTodos] = useState([]);

 useEffect(() => {
  fetchTodos();
 }, []);

 const fetchTodos = async () => {
  const data = await api.getTodos();
  setTodos(data);
 };

 const addTodo = async (todo) => {
  const newTodo = await api.addTodo(todo);
  setTodos([...todos, newTodo]);
 };

 const updateTodo = async (updatedTodo) => {
  await api.updateTodo(updatedTodo);
  const updatedTodos = todos.map((todo) =>
   todo._id === updatedTodo._id ? updatedTodo : todo
  );
  setTodos(updatedTodos);
 };

 const deleteTodo = async (id) => {
  await api.deleteTodo(id);
  const updatedTodos = todos.filter((todo) => todo._id !== id);
  setTodos(updatedTodos);
 };

 return (
  <div>
   <h1>Todo App</h1>
   {/* <TodoForm addTodo={addTodo} />
   <TodoList
    todos={todos}
    updateTodo={updateTodo}
    deleteTodo={deleteTodo}
   /> */}
  </div>
 );
}

export default TodoPage;
