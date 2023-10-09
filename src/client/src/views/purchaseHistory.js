import getFetch from "../lib/getFetch.js"
import { setupTable } from "../lib/setupTable.js";

const host = process.env.HOST
//Show menu's table
async function purchaseHistoryView(boardNode, title) {
    const data = await getFetch(`http://${host}:3003/purchased_history`)
        .then(data => data.ingredients_info) 

    const emptyDataMsg = 'No existen registros de compras.'
    return setupTable(boardNode, data,emptyDataMsg, title)
  }

export { purchaseHistoryView }