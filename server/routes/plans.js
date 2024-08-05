const express = require('express');
const router = express.Router();
const pool = require('../models/Plan');
const authMiddleware = require('../middleware/auth');

// Create a new plan
router.post('/', authMiddleware, async (req, res) => {
  const { title, description, amount, date, user_id } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO plans (title, description, amount, date, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [title, description, amount, date, user_id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all plans
router.get('/', authMiddleware, async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM plans WHERE user_id = $1', [req.user.userId]);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;