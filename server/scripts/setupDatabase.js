const { Pool } = require('pg');
const pool = new Pool();

const createTables = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        password VARCHAR(100) NOT NULL
      );

      CREATE TABLE IF NOT EXISTS plans (
        id SERIAL PRIMARY KEY,
        title VARCHAR(100) NOT NULL,
        description TEXT,
        amount NUMERIC NOT NULL,
        date DATE NOT NULL,
        user_id INTEGER REFERENCES users(id)
      );

      CREATE TABLE IF NOT EXISTS affirmations (
        id SERIAL PRIMARY KEY,
        text TEXT NOT NULL,
        date DATE NOT NULL,
        user_id INTEGER REFERENCES users(id)
      );
    `);
    console.log('Tables created successfully');
  } catch (err) {
    console.error('Error creating tables', err);
  } finally {
    pool.end();
  }
};

createTables();