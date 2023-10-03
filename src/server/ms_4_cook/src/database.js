const mongoose = require('mongoose')

mongoose.connect('mongodb://mongo/Orders', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log('db connected: ', db.connection.host))
.catch(err => console.log(err))