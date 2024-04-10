// index.js

const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/config');
const authRoutes = require('./routes/authRoutes');
const todoRoutes = require('./routes/todoRoutes');
const authMiddleware = require('./middleware/authMiddleware');

// Load environment variables
require('dotenv').config();

// Create Express app
const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies

// Connect to MongoDB
mongoose.connect(config.mongoURI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// Routes
app.get('/', (req, res) => {
  res.send('Hello!')
})
app.use('/api/auth', authRoutes);
app.use('/api/todos', authMiddleware, todoRoutes); // Protected route, requires authentication

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});


// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(Example app listening on port ${port})
// })