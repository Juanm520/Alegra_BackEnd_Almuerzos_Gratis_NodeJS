const { Router } = require('express')
const queries = require('./controller/queries')
const router = Router()

router.get('/', (req, res) => {
    res.setHeader('Content-Type','text/plain')
    res.send('Welcome to Menu List End Point: /menus: all menus. /menu/1-6: Each menu by code.')
})

router.get('/menus', async (req, res) => {
    const data = await queries.allMenus()
    res.json(data)
})

router.get('/menu/:code', async (req, res) => {
    const code = req.params.code
    const data = await queries.menuByCode(code)
    res.json(data)
})

module.exports = router