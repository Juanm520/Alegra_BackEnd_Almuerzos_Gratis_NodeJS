import getFetch from "./getFetch.js"

//Show menu's table
async function loadMenus(menuTableNode) {
    const data = await getFetch('http://localhost:3001/menus')
  
    const ingredientsPairs = data.map((menu) => {
      const ingredientsQty = Object.values(menu.ingredients)
      const ingredientsNames = Object.keys(menu.ingredients)
      return ingredientsNames.map((ingredient, index) => (`${ingredientsQty[index]} und de ${ingredient} `))
    })
  
    const menuItems = data.map((menu, index) => {
      const li = document.createElement('li')
      li.innerHTML = `<strong>${menu.code}. ${menu.name} </strong><br>- Tiempo de cocción: ${menu.cookingTime} minutos.</br> <br><i>Ingredientes:<i> ${ingredientsPairs[index]}.</br>`
      return li
    })
  
    menuItems.forEach((item) => {
      menuTableNode.appendChild(item)
    })
  }

export { loadMenus }