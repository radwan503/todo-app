// routes/todoRoutes.js
const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');
const authMiddleware = require('../middleware/authMiddleware');

// Create a new todo item
router.post('/', authMiddleware, todoController.createTodo);

// Get all todo items
router.get('/', authMiddleware, todoController.getTodos);

// Update a todo item
router.put('/:id', authMiddleware, todoController.updateTodo);

// Delete a todo item
router.delete('/:id', authMiddleware, todoController.deleteTodo);

module.exports = router;
