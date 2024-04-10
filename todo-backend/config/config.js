// config/config.js

module.exports = {
 // MongoDB URI
 mongoURI: process.env.MONGO_URI || 'mongodb+srv://radwananikra:cse3434rara@cluster0.lwqmoun.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',

 // JWT secret key
 jwtSecret: process.env.JWT_SECRET || 'secret'
};
