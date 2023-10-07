import getFetch from "../lib/getFetch.js"
import { setupTable } from "../lib/setupTable.js"


//Show menu's table
async function activeOrdersView(boardNode, title) {
    const data = await getFetch('http://localhost:3002/orders')
      .then(data => data.filter(order => !order.status))

    const emptyDataMsg = 'No hay ordenes pendientes.'

    return setupTable(boardNode, data, emptyDataMsg, title)

  }

export { activeOrdersView }