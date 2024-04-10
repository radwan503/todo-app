// components/TodoForm.js
import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { addTodo } from '../services/api';

const TodoForm = () => {
 const [title, setTitle] = useState('');
 const [description, setDescription] = useState('');

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
   await addTodo({ title, description });
   // Clear form fields after successful submission
   setTitle('');
   setDescription('');
   // Show success notification
   alert('Todo added successfully!');
  } catch (error) {
   console.error('Error adding todo:', error);
   // Show error notification
   alert('Failed to add todo');
  }
 };

 return (
  <form onSubmit={handleSubmit}>
   <TextField
    label="Title"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    fullWidth
    margin="normal"
   />
   <TextField
    label="Description"
    value={description}
    onChange={(e) => setDescription(e.target.value)}
    fullWidth
    multiline
    margin="normal"
   />
   <Button type="submit" variant="contained" color="primary">
    Add Todo
   </Button>
  </form>
 );
};

export default TodoForm;
