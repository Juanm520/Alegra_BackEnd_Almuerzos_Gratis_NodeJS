import getFetch from "../lib/getFetch.js"
import { setupTable } from "../lib/setupTable.js"
import { purchaseHistoryView } from "./purchaseHistory.js"

//Show menu's table
async function foodStorageView(boardNode, title) {
    const data = await getFetch('http://localhost:3003/ingredients_info')
        .then(data => data.ingredients_info)
    //Table of storage    
    setupTable(boardNode, data, '',title)

    //Set button to purchase history
    const purchaseHistoryBtn = document.createElement('button')
    purchaseHistoryBtn.innerText = 'Historial de Compras'
    purchaseHistoryBtn.addEventListener('click', () => {
      purchaseHistoryView(boardNode, 'Historial de compras')
    })

    boardNode.appendChild(purchaseHistoryBtn)

  }

export { foodStorageView }