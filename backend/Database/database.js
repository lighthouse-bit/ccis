const {Pool} = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'ccec_db',
    password: 'root',
    port: 5432,
});

// Export the pool for use in other files
module.exports = pool;