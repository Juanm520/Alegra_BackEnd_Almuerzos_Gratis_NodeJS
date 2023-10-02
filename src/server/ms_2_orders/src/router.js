const { Router } = require('express')
const newOrder = require('./controllers/newOrder')
const router = Router()

router.get('/', (req, res) => {
    res.setHeader('Content-Type','text/plain')
    res.send('Welcome to Order List End Point: /orders: all orders. /new_order: post to create a nwe order.')
})

router.get('/new_order', async (req, res) => {
    if (req.method === 'POST'){
        res.setHeader('Content-Type','text/plain')
        return res.send('Welcome to Menu List End Point: /menus: all menus. /menu/1-6: Each menu by code.')
    }
    res.send('Error: Only Post Method.')
})

// router.get('/menus', async (req, res) => {
//     const data = await queries.allMenus()
//     res.json(data)
// })

// router.get('/menu/:code', async (req, res) => {
//     const code = req.params.code
//     const data = await queries.menuByCode(code)
//     res.json(data)
// })

module.exports = router