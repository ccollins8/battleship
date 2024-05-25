import Ship from "./Ship.js";

export default class Gameboard {
  constructor() {
    this.board = this.buildBoard();
  }

  buildBoard() {
    let board = [];

    for (let i = 0; i < 10; i++) {
      board.push([]);
      for (let j = 0; j < 10; j++) {
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
            this.board[x][y + i]
        }
    }
  }

  receiveAttack(cords) {}
}

const gb1 = new Gameboard();
console.log(gb1.board);

