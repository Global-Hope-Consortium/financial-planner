const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const createPlanTable = async () => {
  const queryText = `
    CREATE TABLE IF NOT EXISTS plans (
      id SERIAL PRIMARY KEY,
      title VARCHAR(100) NOT NULL,
      description TEXT,
      amount NUMERIC(10, 2) NOT NULL,
      date DATE NOT NULL,
      user_id INTEGER REFERENCES users(id)
    );
  `;
  await pool.query(queryText);
};

module.exports = {
  createPlanTable,
};