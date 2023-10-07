import getFetch from "./getFetch.js"
import { clearBoard } from "./clearBoard.js";

//Show menu's table
async function loadOrders(boardNode, title) {
    const data = await getFetch('http://localhost:3002/orders')
    //clean board
    clearBoard(boardNode)
    //create title
    const titleNode = document.createElement('h2')
    titleNode.innerText = title
    boardNode.appendChild(titleNode)
    //Create ol to append li
    const menuNode = document.createElement('ol')
    //Prepare the data
    const ingredientsPairs = data.map((menu) => {
      const ingredientsQty = Object.values(menu.ingredients)
      const ingredientsNames = Object.keys(menu.ingredients)
      return ingredientsNames.map((ingredient, index) => (`${ingredientsQty[index]} und de ${ingredient} `))
    })
  
    const menuItems = data.map((menu, index) => {
      const li = document.createElement('li')
      li.innerHTML = `<strong>${menu.code}. ${menu.name} </strong><br>- Tiempo de cocción: ${menu.cookingTime} minutos.</br> <br><i>Ingredientes:</i> ${ingredientsPairs[index]}.</br>`
      return li
    })
    //Append the items
    menuItems.forEach((item) => {
      menuNode.appendChild(item)
    })
    menuNode.classList.add('menu')
    return boardNode.appendChild(menuNode)
  }

export { loadMenus }