// Express server here.

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
const PORT = 3000;
// Connect to MongoDB (replace 'your-mongodb-uri' with your actual MongoDB URI)
mongoose.connect('mongodb+srv://otimjunior:GILLIANZ@cluster0.kqaubaq.mongodb.net/URA?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

// Check if MongoDB connection is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Import models
const Taxpayer = require('./models/Taxpayer');
const Asset = require('./models/Asset');
const IncomeTax = require('./models/IncomeTax');
const AssetTransfer = require('./models/Transfer'); // Corrected to AssetTransfer

// Middleware to parse JSON data
app.use(express.json());

// Routes for each model
app.use('/taxpayer', Taxpayer);
app.use('/asset', Asset);
app.use('/incomeTax', IncomeTax);
app.use('/transfer', AssetTransfer); // Corrected to AssetTransfer

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
