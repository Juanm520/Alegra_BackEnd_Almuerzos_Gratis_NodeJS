import getFetch from "../lib/getFetch.js"
import { setupTable } from "../lib/setupTable.js"

const host = '34.125.139.171'
//Show menu's table
async function activeOrdersView(boardNode, title) {
    const data = await getFetch(`http://${host}:3002/orders`)
      .then(data => data.filter(order => !order.delivered))

    title += `: ${data.length}`
    const emptyDataMsg = 'No hay ordenes pendientes.'

    return setupTable(boardNode, data, emptyDataMsg, title)

  }

export { activeOrdersView }