// components/TodoList.js
import React, { useEffect, useState } from 'react';
import { CircularProgress, List, ListItem, ListItemText } from '@mui/material';
import { getTodos } from '../services/api';

const TodoList = () => {
 const [todos, setTodos] = useState([]);
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  const fetchData = async () => {
   try {
    const data = await getTodos();
    setTodos(data);
   } catch (error) {
    console.error('Error fetching todos:', error);
   } finally {
    setLoading(false);
   }
  };

  fetchData();
 }, []);

 if (loading) {
  return <CircularProgress />;
 }

 return (
  <List>
   {todos.map((todo) => (
    <ListItem key={todo._id}>
     <ListItemText primary={todo.title} secondary={todo.description} />
    </ListItem>
   ))}
  </List>
 );
};

export default TodoList;
