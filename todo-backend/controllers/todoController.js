// controllers/todoController.js
const Todo = require('../models/Todo');

// Create a new todo item
exports.createTodo = async (req, res) => {
 try {
   const { title, description, completed } = req.body;
   const userId = req.user.id;

   const todo = new Todo({
     user: userId,
     title,
     description,
     completed // Added completed field
   });

   await todo.save();

   res.status(201).json(todo);
 } catch (err) {
   console.error(err.message);
   res.status(500).send('Server Error');
 }
};

// Get all todo items for a user
exports.getTodos = async (req, res) => {
  try {
    const userId = req.user.id;
    const todos = await Todo.find({ user: userId }).sort({ createdAt: -1 });
    res.json(todos);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Update a todo item
exports.updateTodo = async (req, res) => {
  try {
    const { title, description, completed } = req.body;
    const todoId = req.params.id;
    const userId = req.user.id;

    let todo = await Todo.findById(todoId);
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    if (todo.user.toString() !== userId) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    todo.title = title;
    todo.description = description;
    todo.completed = completed;

    await todo.save();

    res.json(todo);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Delete a todo item
exports.deleteTodo = async (req, res) => {
  try {
    // Extract the todo ID from request parameters
    const todoId = req.params.id;

    // Use deleteOne to remove the todo with the given ID
    const result = await Todo.deleteOne({ _id: todoId });

    if (result.deletedCount === 0) {
      // If no document was deleted, return a 404 Not Found response
      return res.status(404).json({ message: 'Todo not found' });
    }

    // Return a success response
    res.json({ message: 'Todo deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};