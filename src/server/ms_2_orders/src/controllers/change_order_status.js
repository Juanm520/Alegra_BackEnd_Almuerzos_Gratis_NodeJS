const order = require('../models/model.order')

async function changeOrderStatus({ id }){
    try {
      const query = await order.findByIdAndUpdate(id, { delivered: true })
      return query
    }
    catch (err) {
      throw new Error(err)
    }
   }
   
   module.exports = changeOrderStatus