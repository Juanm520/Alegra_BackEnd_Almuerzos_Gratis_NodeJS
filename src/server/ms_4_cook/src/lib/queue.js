const { activeOrders } = require("../controllers/getOrders")
const processOrder = require("./processOrder")


class Queue {
    //Objects into orders
    #elemnts = []
    //Methods to handle the queue
    enqueue(element){
        return this.#elemnts.push(element)
    }
    dequeue(){
        return this.#elemnts.shift()
    }
    isEmpty(){
        return this.#elemnts.length === 0
    }

}
//Define the orders queue
const orderQueue = new Queue()

//Add the orders to the queue
async function enqueueOrders(){
    const undeliveredOrders = await activeOrders()
    const mappingOrderQueue = undeliveredOrders.map(order => orderQueue.enqueue(() => processOrder(order)))
    return `${mappingOrderQueue.length} pendient orders.`
}

//Process each order in the queue
async function dequeueingOrders(){
    while(!orderQueue.isEmpty()){
        const run = orderQueue.dequeue()
        const response = await run()
        console.log(response)
    }
}

//To define the timeouts
let loopDelay
//Define the looping of the queue.
async function runQueue(delayInMIllisenconds) {
    //Queue the orders
    await enqueueOrders().then((msg)=> console.log(msg))
    //Solve the orders
    await dequeueingOrders()
    //Set the delay beetwen loop
    loopDelay = setTimeout(() =>  {
        runQueue(delayInMIllisenconds)
    } , delayInMIllisenconds)
    //
    return loopDelay
}

function stopQueue(){
    clearTimeout(loopDelay)
}


module.exports = {runQueue, stopQueue}