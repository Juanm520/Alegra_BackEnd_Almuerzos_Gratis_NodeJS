const pool = require('../database')

async function updateIngredientQuantity({ ingredient, quantity }){
    const updatedQuery = `UPDATE ingredients_list SET quantity = quantity + ? WHERE ingredient= ?`

    //Query to update and return the new information
    return new Promise((resolve, reject) => {
        pool.query(updatedQuery ,[quantity, ingredient], function(err, rows){
            if(err){
                return reject(err)
            }
            resolve(rows)
        })
    }) 
}

async function setTimesPurchased({ ingredient }){
    //Prepare query to count the rows in times_purchased
    const countQueryPh = `SELECT COUNT(ingredient) FROM purchase_history WHERE ingredient = ?`
    //Concat queries to update the field.
    const updatedQuery = `UPDATE ingredients_list SET times_purchased =  (${countQueryPh}) WHERE ingredient= ?`

    //Query to update and return the new information
    return new Promise((resolve, reject) => {
        pool.query(updatedQuery, [ingredient, ingredient], function(err, rows){
            if(err){
                return reject(err)
            }
            resolve(rows)
        })
    }) 
}

module.exports = {quantity: updateIngredientQuantity,
                  times_purchased: setTimesPurchased}