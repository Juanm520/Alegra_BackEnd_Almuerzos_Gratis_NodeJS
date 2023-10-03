const { Router } = require('express')
const router = Router()
const ingredients = require('./models/ingredients')
const updateIngredient = require('./models/updateIngredients')
const buyIngredient = require('./controllers/newPurchase')
const getPurchasedHistory = require('./models/purchasedHistory')


router.get('/', (req, res) => {
    res.setHeader('Content-Type','text/plain')
    res.send('Welcome to Food Storage End Point: /ingredients_info: Info about ingredients. /purchased_history: Info about purchases. /buy: Buy ingredients. /ingredient_update: Update quantity of an Ingredient.')
})

router.get('/ingredients_info', async (req, res) => {
    try{
        const getIngredients = await ingredients()
        res.send(getIngredients)
    }
    catch(err){
        res.json(err)
    }
})

router.get('/purchased_history', async (req, res) => {
    try{
        const getHistory = await getPurchasedHistory()
        res.send(getHistory)
    }
    catch(err){
        res.json(err)
    }
})

router.post('/buy', async (req, res) => {
    try {
        const params = req.body
        const data = await buyIngredient(params)
        res.json(data)
    }
    catch(err){
        res.json(err)
    }
})


router.patch('/ingredient_update', async (req, res) => {
    try {
        const params = req.body
        const data = await updateIngredient.quantity(params)
        await updateIngredient.times_purchased(params)
        res.json(data)
    }
    catch(err){
        res.json(err)
    }
})


module.exports = router