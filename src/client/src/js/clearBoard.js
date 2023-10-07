function clearBoard(boardNode){
    while(boardNode.childElementCount)
    boardNode.firstChild.remove()
}

export { clearBoard }