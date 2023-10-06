const express = require('express')
const cors = require('cors')
const app = express()
const port = 3002

//Connect Db
require('./database')

//config cors
app.use(cors());

//To read json post
app.use(express.json());

//Requiere Router
app.use(require('./router'))

//Start server
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
});