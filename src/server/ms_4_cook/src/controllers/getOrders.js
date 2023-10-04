//Get the list of the orders.
async function getOrders(){
    const url = 'http://localhost:3002'
    const service = 'orders'
    const petition = `${url}/${service}`
    const options = {
        method: 'GET'
    }
    try{
        const data = await fetch(petition, options)
        const orders = await data.json()
        return orders
    }
    catch(err){
        return err
    }
}

//Get the list of the active orders (no delivered)
async function activeOrders(){
    const orders = await getOrders()
    const activeOrders = orders.filter(order => !order.delivered )
    return activeOrders
}

module.exports = { getOrders, activeOrders }