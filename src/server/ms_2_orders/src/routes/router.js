const { Router } = require('express')
const router = Router()

router.get('/', (req, res) =>{
    res.setHeader('Content-Type', 'text/plain')
    res.send('Almuerzos Gratis')
})

module.exports = router