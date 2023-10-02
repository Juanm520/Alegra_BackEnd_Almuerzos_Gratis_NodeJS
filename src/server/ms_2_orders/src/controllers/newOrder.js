const order = require('../models/model.order')

async function newOrder (menuCode, date, status = false){
 try {
    const newOrder = new order( {
        'menu': menuCode,
        'date': date,
        'delivered': status
    } )
    return await newOrder.save()
 }
 catch {
    console.log('error')
 }
}

module.exports = newOrder