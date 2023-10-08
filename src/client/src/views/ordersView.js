import getFetch from "../lib/getFetch.js"
import { setupTable } from "../lib/setupTable.js";


//Show menu's table
async function ordersView(boardNode, title) {
    const data = await getFetch('http://ms_orders:3002/orders')
    title += `: ${data.length}`
    const emptyDataMsg = 'No hay existen registros de ordenes.'
    return setupTable(boardNode, data, emptyDataMsg, title)
  }

export { ordersView }