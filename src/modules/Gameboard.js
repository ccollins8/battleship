import Ship from "./Ship.js";

const size = 10

export default class Gameboard {
  constructor() {
    this.board = this.buildBoard();
  }

  buildBoard() {
    let board = [];

    for (let i = 0; i < size; i++) {
      board.push([]);
      for (let j = 0; j < size; j++) {
        board[i][j] = ""; // Cell can be empty, hit, miss, etc.
      }
    }

    return board;
  }

  placeShip(ship, x, y, isVertical) {

    if (isVertical) {
        if (x + shipLength > this.board.length) {
          return false
        }
      } else {
        if (y + shipLength > this.board[0].length) {
          return false
        }
      }
    
    if (isVertical) {
        for (let i = 0; i < ship.length; i++) {
            this.board[x + i][y] = ship
        }
    } else {
        for (let i = 0; i < ship.length; i++) {
            this.board[x][y + i] = ship
        }
    }
  }

  isPlacementPossible(ship, x, y, isVertical) {
    // check if placement is out of bounds
    if (isVertical) {
        if (x + ship.length > size) return false
    } else {
        if (y + ship.length > size) return false
    }

    // check if placement collides with other ship/ships
    if (isVertical) {
        for (let i = 0; i < ship.length; i++) {
            if (this.board[x + i][y] instanceof Ship) return false
        }
    } else {
        for (let i = 0; i < ship.length; i++) {
            if (this.board[x][y + i] instanceof Ship) return false
        }
    }

  }

  receiveAttack(cords) {}
}

const gb1 = new Gameboard();
console.log(gb1.board);

