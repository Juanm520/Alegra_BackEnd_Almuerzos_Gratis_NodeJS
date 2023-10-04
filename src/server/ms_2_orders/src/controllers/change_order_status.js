const order = require('../models/model.order')

async function changeOrderStatus({ _id }){
    try {
      const query = await order.findByIdAndUpdate(_id, { delivered: true })
      return order.findById(_id)
    }
    catch (err) {
      throw new Error(err)
    }
   }
   
   module.exports = changeOrderStatus