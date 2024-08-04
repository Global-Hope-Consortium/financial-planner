const pool = require('../config/db');

const createAffirmationTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS affirmations (
      id SERIAL PRIMARY KEY,
      text TEXT NOT NULL,
      date DATE NOT NULL,
      user_id INTEGER REFERENCES users(id)
    );
  `;
  await pool.query(query);
};

createAffirmationTable();

module.exports = pool;