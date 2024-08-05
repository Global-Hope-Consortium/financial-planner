const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const createAffirmationTable = async () => {
  const queryText = `
    CREATE TABLE IF NOT EXISTS affirmations (
      id SERIAL PRIMARY KEY,
      text TEXT NOT NULL,
      date DATE NOT NULL,
      user_id INTEGER REFERENCES users(id)
    );
  `;
  await pool.query(queryText);
};

module.exports = {
  createAffirmationTable,
};