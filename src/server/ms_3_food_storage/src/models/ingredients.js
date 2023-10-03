const pool = require('../database')

class ingredients_info{
    constructor(rows){
        this.ingredients_info = rows
    }
}

async function getIngredientsInfo(){
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM `ingredients_list`', function(err, rows){
            if(err){
                return reject(err)
            }
            resolve(new ingredients_info(rows))
        })
    }) 
}

module.exports = getIngredientsInfo