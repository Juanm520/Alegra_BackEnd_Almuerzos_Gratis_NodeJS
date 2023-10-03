const pool = require('../database')
const buyToMarket = require('../controllers/goToMarket')

async function buyIngredient({ ingredient }){
    //Buy in Market
    const quantityBought = await buyToMarket({ingredient})
    //Prepare query to add the new row.
    const insertNewPurchasedQuery = `INSERT INTO purchase_history (ingredient, quantity_purchased, date_purchased)
    VALUES( ?, ?, NOW())`

    //Query to insert the row in purchased_history
    return new Promise((resolve, reject) => {
        //Return if the response of the market is 0.
        if(quantityBought === 0){
            return reject('Not available')
        }
        //Insert the query.
        pool.query(insertNewPurchasedQuery,[ingredient, quantityBought], function(err, rows){
            if(err){
                return reject(err)
            }
            resolve(rows)
        })
    }) 
}

module.exports = buyIngredient