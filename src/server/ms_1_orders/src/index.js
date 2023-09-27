const express = require('express')
const app = express()

const port = 3000

require("./database/db.js")
app.use(require('./routes/router.js'))

app.listen(port, () => {
    console.log('http://localhost:3000')
})