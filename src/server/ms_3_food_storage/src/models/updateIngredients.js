const pool = require('../database')

class ingredient_info{
    constructor(rows){
        this.ingredient = rows
    }
}

async function updateIngredientQuantity({ ingredient, quantity }){
    const updatedQuery = `UPDATE ingredients_list SET quantity = quantity + ? WHERE ingredient= ?`

    //Query to update and return the new information
    return new Promise((resolve, reject) => {
        pool.query(updatedQuery ,[quantity, ingredient], function(err, rows){
            if(err){
                return reject(err)
            }
            resolve(new ingredient_info(rows))
        })
    }) 
}

module.exports = updateIngredientQuantity