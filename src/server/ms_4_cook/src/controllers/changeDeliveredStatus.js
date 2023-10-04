async function changeDeliveredStatus(order){
    const url = 'http://localhost:3002'
    const service = 'change_order_status'
    const petition = `${url}/${service}`
    const options = {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(order)
    }
    try{
        const data = await fetch(petition, options)
        const response = await data.json()
        return response
    }
    catch(err){
        return err
    }
}

module.exports = changeDeliveredStatus



