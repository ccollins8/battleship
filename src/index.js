import "./style.css";
import Dom from './modules/Dom'
import Ship from "./modules/Ship";
import Gameboard from "./modules/Gameboard";
import Player from "./modules/Player";

const p1 = new Player('corey',true)
const p2 = new Player('bot', false)

let CurrentPlayer = p1

// p1 ships
const p1ship1 = new Ship(4)
const p1ship2 = new Ship(3)
const p1ship3 = new Ship(2)
const p1ship4 = new Ship(1)

p1.gameboard.placeShip(p1ship1, 5, 2, true)
p1.gameboard.placeShip(p1ship2, 8, 6, false)
p1.gameboard.placeShip(p1ship3, 4, 7, false)
p1.gameboard.placeShip(p1ship4, 7, 8, true)

p2.gameboard.placeShipsRandomly()
console.log(p2.gameboard.board)

const left = document.querySelector('.left')
const right = document.querySelector('.right')

Dom.renderBoard(p1.gameboard, left)
Dom.renderBoard(p2.gameboard, right)

left.addEventListener("click", (e) => {
    if (e.target.classList.contains("cell") && CurrentPlayer == p1) {
        const split_coords = e.target.id.split(',')
        const x = parseInt(split_coords[0])
        const y = parseInt(split_coords[1])
        p1.gameboard.receiveAttack(x,y)
        CurrentPlayer = p2
        Dom.renderBoard(p1.gameboard, left)
    }
})

right.addEventListener("click", (e) => {
    if (e.target.classList.contains("cell") && CurrentPlayer == p2) {
        const split_coords = e.target.id.split(',')
        const x = parseInt(split_coords[0])
        const y = parseInt(split_coords[1])
        p2.gameboard.receiveAttack(x,y)
        CurrentPlayer = p1
        Dom.renderBoard(p2.gameboard, right)
    }
})