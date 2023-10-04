async function newBuy(ingredient){
    const url = 'http://localhost:3003'
    const service = 'buy'
    const petition = `${url}/${service}`
    const body = { ingredient: ingredient }
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
    }
    try{
        const data = await fetch(petition, options)
        return await data.json()
    }
    catch(err){
        return err
    }
}

module.exports = newBuy