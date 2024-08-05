const express = require('express'); // instance of the framework
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');
const planRoutes = require('./routes/plans');
const affirmationRoutes = require('./routes/affirmations');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database setup
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }
  console.log('Database connected successfully');
  release();
  pool.end();
});

// Routes
app.use('/api/plans', planRoutes);
app.use('/api/affirmations', affirmationRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});