const express = require('express')
const app = express()
const port = 3004

//To read json post
app.use(express.json());

//Requiere Router
app.use(require('./router'))

//Resolve order queue.


//Start server
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
});
