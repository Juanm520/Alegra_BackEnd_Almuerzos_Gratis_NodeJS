const { Router } = require('express')
const router = Router()
const order = require('./controllers/order')
const orders = require('./controllers/orders')
const newOrder = require('./controllers/newOrder')
const changeOrderStatus = require('./controllers/change_order_status')

router.get('/', (req, res) => {
    res.setHeader('Content-Type','text/plain')
    res.send('Welcome to Order List End Point: /orders: all orders. /order/id: order by _id. /new_order: post to create a new order. /change_order_status: change status of the order')
})

router.get('/orders', async (req, res) => {
    const getOrders = await orders()
    res.json(getOrders)
})

router.get('/order/:id', async (req, res) => {
    const id = req.params.id
    const data = await order(id)
    res.json(data)
})

router.post('/new_order', async (req, res) => {
    try {
        const order = await newOrder()
        return res.send(order)
    }
    catch {
        res.send('error')
    }
})

router.patch('/change_order_status', async (req, res) => {
    try {
        const data = req.body
        const order = await changeOrderStatus(data)
        return res.send(order)
    }
    catch(err){
        res.send(err.name === 'Error' ? 'Invalid parameter or doesnt exist the record' : '')
    }
})

module.exports = router