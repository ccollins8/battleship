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

    static displayEnd(winner) {
        const dialog = document.querySelector('.play-again')
        const h2 = document.querySelector('.play-again h2')
        if (winner.type != 'computer') {
            console.log("You Won!")
            h2.textContent = 'You Win!'
            dialog.showModal()

        } else {
            console.log("You Lose!")
            h2.textContent = "You Lose!"
            dialog.showModal()
        }
    }

    static placeShips() {
        const dialog = document.querySelector('.set-board')
        dialog.showModal()

    }
    
}








// handle cell click