const pool = require('../database')

class purchased_info{
    constructor(rows){
        this.ingredients_info = rows
    }
}

async function getPurchasedHistory(){
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM purchase_history', function(err, rows){
            if(err){
                return reject(err)
            }
            resolve(new purchased_info(rows))
        })
    }) 
}

module.exports = getPurchasedHistory