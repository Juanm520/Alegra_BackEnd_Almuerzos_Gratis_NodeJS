const processOrder = require('./processOrder')
const { activeOrders } = require('../controllers/getOrders')

async function processQueue(){
    //To set the delay to restar the loop
    let processOrdersDelay = 0
    //Set the interval
    const intervalQueue = setInterval(async function(){
        //Get the active order
        const undeliveredOrders = await activeOrders()
        //Validate if there are pendient orders
        if (undeliveredOrders.length === 0) {
            return console.log('Empty queue')
        } 
        else {
            //Delete the loop
            clearInterval(intervalQueue)
            //Resolve each order with processOrder method
            undeliveredOrders.forEach(async order => {
            await processOrder(order)
            return console.log(`${order._id} Processed`)
            })
            processOrdersDelay = undeliveredOrders.length * 3000
        }
    }, 3000)
    //Restart the queue loop
    setTimeout(processQueue, processOrdersDelay)
}

module.exports = processQueue



