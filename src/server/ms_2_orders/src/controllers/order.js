const order = require('../models/model.order')

async function orderByCode( id ){
    try {
        const query = order.where({_id: id})
        const orderSnapshot = await order.findOne(query)
       return orderSnapshot
    }
    catch(err) {
       return(err)
    }
   }

module.exports = orderByCode