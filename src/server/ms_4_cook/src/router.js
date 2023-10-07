const { Router } = require('express')
const router = Router()
const { runQueue, stopQueue } = require('./lib/queue')

router.get('/', (req, res) => {
    res.setHeader('Content-Type','text/plain')
    res.send('Welcome to Kitcken End Point: /start_kitchen. /stop_kitchen')
})

router.post('/start_kitchen', (req, res) => {
    stopQueue()
    runQueue(5000)
    res.json('The kitchen is ready.')
})

router.post('/stop_kitchen', (req, res) => {
    stopQueue()
    res.json('The kitchen is shut down.')
})

module.exports = router