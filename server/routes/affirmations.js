const express = require('express');
const router = express.Router();
const pool = require('../models/Affirmation');

// Create a new affirmation
router.post('/', async (req, res) => {
  const { text, date, user_id } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO affirmations (text, date, user_id) VALUES ($1, $2, $3) RETURNING *',
      [text, date, user_id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all affirmations
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM affirmations');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;