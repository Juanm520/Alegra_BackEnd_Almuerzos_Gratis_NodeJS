const buyToMarket = require('./goToMarket')
const updateIngredients = require('../models/updateIngredients')
const registerNewPurchase = require('../models/registerNewPurchase')

async function newPurchase({ ingredient }){
    //Buy in Market
    const quantity = await buyToMarket({ ingredient })
    if(quantity === 0){
        return ('Not Avalible')
    }
    //Update info into database
    try {
        await updateIngredients.quantity({ ingredient, quantity })
        await registerNewPurchase({ ingredient, quantity })
        await updateIngredients.times_purchased({ ingredient })
    } catch (err) {
        return err
    }
    //return info of purchase
    return { ingredient, quantity }
}

module.exports = newPurchase