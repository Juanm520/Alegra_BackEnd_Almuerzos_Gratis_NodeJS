const { createPool } = require('mysql2')

// connection to database
const pool = createPool({
    host: 'mysql',
    port: 3306,
    user: 'root',
    password: process.env.MYSQLDB_ROOT_PASSWORD,
    database: process.env.MYSQLDB_DATABASE,
})

module.exports = pool
