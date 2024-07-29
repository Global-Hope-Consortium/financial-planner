const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');
const planRoutes = require('./routes/plans');
const affirmationRoutes = require('./routes/affirmations');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database setup
const pool = new Pool({
  user: 'yourusername',
  host: 'localhost',
  database: 'planner',
  password: 'yourpassword',
  port: 5432,
});

// Routes
app.use('/api/plans', planRoutes);
app.use('/api/affirmations', affirmationRoutes);

// Plan routes
app.post('/api/plans', async (req, res) => {
  const { title, description, amount, date } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO plans (title, description, amount, date) VALUES ($1, $2, $3, $4) RETURNING *',
      [title, description, amount, date]
    );
    res.send(result.rows[0]);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get('/api/plans', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM plans');
    res.send(result.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Affirmation routes
app.post('/api/affirmations', async (req, res) => {
  const { text, date } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO affirmations (text, date) VALUES ($1, $2) RETURNING *',
      [text, date]
    );
    res.send(result.rows[0]);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get('/api/affirmations', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM affirmations');
    res.send(result.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});