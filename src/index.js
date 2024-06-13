import "./style.css";
import Dom from './modules/Dom'
import Ship from "./modules/Ship";
import Gameboard from "./modules/Gameboard";
import Player from "./modules/Player";

const p1 = new Player('corey',true)
const p2 = new Player('bot', false)

Dom.placeShips()

let ships = [new Ship(4), new Ship(3), new Ship(2), new Ship(1)]

// p1 ships
// const p1ship1 = new Ship(4)
// const p1ship2 = new Ship(3)
// const p1ship3 = new Ship(2)
// const p1ship4 = new Ship(1)

// p1.gameboard.placeShip(p1ship1, 5, 2, true)
// p1.gameboard.placeShip(p1ship2, 8, 6, false)
// p1.gameboard.placeShip(p1ship3, 4, 7, false)
// p1.gameboard.placeShip(p1ship4, 7, 8, true)

p2.gameboard.placeShipsRandomly()
console.log(p2.gameboard.board)

const left = document.querySelector('.left')
const right = document.querySelector('.right')

Dom.renderBoard(p1.gameboard, left)
Dom.renderBoard(p2.gameboard, right)


right.addEventListener("click", (e) => {
    if (e.target.classList.contains("cell")) {
        const split_coords = e.target.id.split(',')
        const x = parseInt(split_coords[0])
        const y = parseInt(split_coords[1])
        p2.gameboard.receiveAttack(x,y)
        Dom.renderBoard(p2.gameboard, right)
        p1.gameboard.receiveAttackRandomly()
        Dom.renderBoard(p1.gameboard, left)
        if (p2.gameboard.allShipsSunk()) {
            Dom.displayEnd(p1)
        }
        else if (p1.gameboard.allShipsSunk()) {
            Dom.displayEnd(p2)
        }
    }
})

const playAgainBtn = document.querySelector('.play-again button')
const playAgainDialog = document.querySelector('.play-again')

playAgainBtn.addEventListener("click", () => {
    playAgainDialog.close()
    resetGame()
})

function resetGame() {
    p1.gameboard.board = p1.gameboard.buildBoard()
    p2.gameboard.board = p2.gameboard.buildBoard()
    p1.gameboard.missedShots = new Array(10).fill(null).map(() => new Array(10).fill(false));
    p2.gameboard.missedShots = new Array(10).fill(null).map(() => new Array(10).fill(false));
    Dom.renderBoard(p1.gameboard, left)
    Dom.renderBoard(p2.gameboard, right)

    // p1.gameboard.placeShip(p1ship1, 5, 2, true)
    // p1.gameboard.placeShip(p1ship2, 8, 6, false)
    // p1.gameboard.placeShip(p1ship3, 4, 7, false)
    // p1.gameboard.placeShip(p1ship4, 7, 8, true)
    ships = [new Ship(4), new Ship(3), new Ship(2), new Ship(1)]

    Dom.placeShips()

    p2.gameboard.placeShipsRandomly()
    // put ships = [...] here later

}

const setBoardBtn = document.querySelector('.set-board #place')
const randomizeCoordsBtn = document.querySelector('.set-board #random')
const setBoardDiaglog = document.querySelector('.set-board')

const setX = document.querySelector('#x')
const setY = document.querySelector('#y')
const setVert = document.querySelector('#isVertical')

setBoardBtn.addEventListener('click', () => {
    console.log(setX.value)
    console.log(setY.value)

    const x = parseInt(setX.value)
    const y = parseInt(setY.value)
    const isVert = setVert.checked
    console.log(typeof(x))

    // p1.gameboard.placeShip(p1ship1, 5, 2, true)
    if (p1.gameboard.placeShip(ships[0], x, y, isVert)) {
        ships.shift()
        if (ships.length == 0) setBoardDiaglog.close()
        console.log(ships.length)
    }
    console.log(p1.gameboard.board)

})

function randomizeCoords() {
    const x = Math.floor(Math.random()*10)
    const y = Math.floor(Math.random()*10)
    const isVertical = Math.floor(Math.random()*2)
    
    setX.value = x
    setY.value = y
}

randomizeCoordsBtn.addEventListener('click', () => {
    randomizeCoords()
})
