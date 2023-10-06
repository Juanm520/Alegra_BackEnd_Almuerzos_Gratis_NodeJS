const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001

//conect Db
require('./database')

//config cors
app.use(cors());

// Requiere Router
app.use(require('./router'))

// Start server
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
});