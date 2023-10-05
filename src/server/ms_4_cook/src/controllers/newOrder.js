async function newOrder(){
    const url = 'http://ms_orders:3002'
    const service = 'new_order'
    const petition = `${url}/${service}`
    const options = {
        method: 'POST'
    }
    try{
        const data = await fetch(petition, options)
        return await data.json()
    }
    catch(err){
        return err
    }
}

module.exports = newOrder