async function goToMarket({ ingredient }){
    const url = 'https://recruitment.alegra.com/api/farmers-market/buy'
    const petition = `${url}?ingredient=${ingredient}`

    const data = await fetch(petition)
    const json = await data.json()
    
    const quantityBuy = json.quantitySold

    return quantityBuy
}

module.exports = goToMarket