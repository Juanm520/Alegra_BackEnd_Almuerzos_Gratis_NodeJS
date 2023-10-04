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

async function buyIngredientList(ingredientMatrix){
//Iterate to buy the ingredients
return ingredientMatrix.map( async ingredient => {
    try {
        let buy = await newBuy(ingredient[0])
        while(buy === 'Not Avalible'){
            buy = await newBuy(ingredient[0])
        }
        return buy
    } 
    catch (err) {
        return err
    }
    })
}

module.exports ={ newBuy, buyIngredientList }