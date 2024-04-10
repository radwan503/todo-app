// models/User.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define user schema
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

// Create and export User model
module.exports = mongoose.model('User', UserSchema);
