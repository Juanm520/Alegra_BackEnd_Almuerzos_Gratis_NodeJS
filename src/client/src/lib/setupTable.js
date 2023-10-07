import { setupBoard } from "./setupBoard.js"

async function setupTable(boardNode, data, emptyDataMsg, title) {
    //clean board
    setupBoard(boardNode, title)

    //Id data is empty return title
    if(data.length === 0){
      const noDataNode = document.createElement('h4')
      noDataNode.innerText = emptyDataMsg
      return boardNode.appendChild(noDataNode)
    }

    //Prepare the data
    const titlesData = Object.keys(data[0])
    const rowsData = data.map(order => Object.values(order))

    //Create table
    const table = document.createElement('table')

    //Set columns
    const columns = document.createElement('tr')
    //Create and append titles nodes
    const columnsTitlesNode = titlesData.map(title => {
      const column = document.createElement('th')
      column.innerText = title
      return column
    })
    columnsTitlesNode.forEach(title => columns.appendChild(title))

    // Create rows of table
    const rowsDataNodes = rowsData.map((row) => {
      const rowNode = document.createElement('tr')
      row.forEach(row => {
        const cellNode = document.createElement('td')
        cellNode.innerText = row
        rowNode.appendChild(cellNode)
      })
      return rowNode
    })

    //Append titles
    table.appendChild(columns)
    //Append rows
    rowsDataNodes.forEach(rowNode => table.appendChild(rowNode))

    //Add styles
    table.classList.add('table')

    return boardNode.appendChild(table)
  }

  export { setupTable }
