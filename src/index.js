import "./style.css";
import Dom from './modules/Dom'
import Ship from "./modules/Ship";
import Gameboard from "./modules/Gameboard";

const gb = new Gameboard
const ship1 = new Ship(4)
const ship2 = new Ship(3)
const ship3 = new Ship(2)
const ship4 = new Ship(1)

gb.placeShip(ship1, 3, 2, true)
gb.placeShip(ship2, 6, 4, false)
gb.placeShip(ship3, 4, 7, false)
gb.placeShip(ship4, 7, 7, true)

const left = document.querySelector('.left')

Dom.renderBoard(gb)

left.addEventListener("click", (e) => {
    if (e.target.classList.contains("cell")) {
        const split_coords = e.target.id.split(',')
        const x = parseInt(split_coords[0])
        const y = parseInt(split_coords[1])
        gb.receiveAttack(x,y)
        Dom.renderBoard(gb)
    }
})