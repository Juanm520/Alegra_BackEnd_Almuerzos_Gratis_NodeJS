const pool = require('../database')

async function registerNewPurchase({ ingredient, quantity }){
    //Prepare query to add the new row.
    const insertNewPurchasedQuery = `INSERT INTO purchase_history (ingredient, quantity_purchased, date_purchased)
    VALUES( ?, ?, NOW())`

    //Query to insert the row in purchased_history
    return new Promise( (resolve, reject) => {
        //Insert the query.
        pool.query(insertNewPurchasedQuery,[ingredient, quantity], function(err, rows){
            if(err){
                return reject(err)
            }
            resolve(rows)
        })
    }) 
}

module.exports = registerNewPurchase