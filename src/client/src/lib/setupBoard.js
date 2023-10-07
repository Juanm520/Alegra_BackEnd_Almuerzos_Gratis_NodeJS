function setupBoard(boardNode, title){
    while(boardNode.childElementCount){
    boardNode.firstChild.remove()
    }
    //create title
    const titleNode = document.createElement('h2')
    titleNode.innerText = title
    boardNode.appendChild(titleNode)
}

export { setupBoard }