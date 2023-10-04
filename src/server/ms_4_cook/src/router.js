const { Router } = require('express')
const newOrder = require('./controllers/newOrder')
const router = Router()

router.get('/', (req, res) => {
    res.setHeader('Content-Type','text/plain')
    res.send('Welcome to Kitcken End Point: /order_up: Make new order.')
})

module.exports = router