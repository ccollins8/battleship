// display/render boards

const left = document.querySelector('.left')
const right = document.querySelector('.right')

export default class Dom {
    
     static renderBoard(gameboard,container) {
        container.innerHTML = ''
        for (let i = 0; i < 10; i++ ) {
            for (let j = 0; j < 10; j++) {
                const cell = document.createElement('div')
                cell.id = [i,j]
                cell.classList.add('cell')
                container.appendChild(cell)
                if (gameboard.missedShots[i][j] == true) {
                    cell.style.backgroundColor = 'red'
                } else if (gameboard.board[i][j] == 'hit') {
                    cell.style.backgroundColor = 'lightgreen'
                }
            }
        }
    }
}








// handle cell click