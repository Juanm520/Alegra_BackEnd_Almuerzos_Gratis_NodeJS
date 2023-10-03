const express = require('express')
const app = express()
const port = 3003

//To read json post
app.use(express.json());

//Requiere Router
app.use(require('./router'))

//Start server
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
});