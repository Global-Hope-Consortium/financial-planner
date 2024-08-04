const pool = require('../config/db');

const createPlanTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS plans (
      id SERIAL PRIMARY KEY,
      title VARCHAR(100) NOT NULL,
      description TEXT,
      amount NUMERIC NOT NULL,
      date DATE NOT NULL,
      user_id INTEGER REFERENCES users(id)
    );
  `;
  await pool.query(query);
};

createPlanTable();

module.exports = pool;