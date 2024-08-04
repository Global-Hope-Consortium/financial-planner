const { Pool } = require('pg');

const pool = new Pool({
  user: 'sthwalonyoni',
  host: 'localhost',
  database: 'planner',
  password: 'LeeZee1823#',
  port: 5432,
});

module.exports = pool;