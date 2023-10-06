const express = require('express')
const cors = require('cors')
const app = express()
const port = 3004

//To read json post
app.use(express.json());

//config cors
app.use(cors());

//Requiere Router
app.use(require('./router'))

//Start server
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
});
