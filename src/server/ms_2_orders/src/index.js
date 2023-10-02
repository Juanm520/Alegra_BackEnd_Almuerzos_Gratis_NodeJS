const express = require('express')
const app = express()
const port = 3008

//conect Db
require('./database')

// Requiere Router
app.use(require('./router'))

// Start server
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
});