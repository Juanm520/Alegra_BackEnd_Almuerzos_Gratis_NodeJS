const { createPool } = require('mysql2')
const dotenv = require('dotenv')

dotenv.config({path: '../../../.env'})

// connection to database
const pool = createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: process.env.MYSQLDB_ROOT_PASSWORD,
    database: 'food_storage',
})

module.exports = pool
