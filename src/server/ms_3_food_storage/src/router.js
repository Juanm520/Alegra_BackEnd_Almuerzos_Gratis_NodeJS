const { Router } = require('express')
const router = Router()
const ingredients = require('./models/ingredients')


router.get('/', (req, res) => {
    res.setHeader('Content-Type','text/plain')
    res.send('Welcome to Food Storage End Point: /ingredients: Info about ingredients.')
})

router.get('/ingredients_info', async (req, res) => {
    const getIngredients = await ingredients()
    console.log(getIngredients)
    res.send(getIngredients)
})

// router.get('/order/:id', async (req, res) => {
//     const id = req.params.id
//     const data = await order(id)
//     res.json(data)
// })

// router.post('/new_order', async (req, res) => {
//     try {
//         const order = await newOrder()
//         return res.send(order)
//     }
//     catch {
//         res.send('error')
//     }
// })

// router.patch('/change_order_status', async (req, res) => {
//     try {
//         const data = req.body
//         const order = await changeOrderStatus(data)
//         return res.send(order)
//     }
//     catch(err){
//         res.send(err.name === 'Error' ? 'Invalid parameter or doesnt exist the record' : '')
//     }
// })

module.exports = router