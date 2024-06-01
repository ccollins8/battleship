import Ship from "./Ship.js";

export const size = 10

export default class Gameboard {
  constructor() {
    this.board = this.buildBoard();
    this.missedShots = new Array(10).fill(null).map(() => new Array(10).fill(false));

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
    if (!this.isPlacementPossible(ship,x,y,isVertical)) return false
    
    if (isVertical) {
        for (let i = 0; i < ship.length; i++) {
            this.board[x + i][y] = ship
        }
    } else {
        for (let i = 0; i < ship.length; i++) {
            this.board[x][y + i] = ship
        }
    }
    return true
  }

  placeShipsRandomly() {

    const ship1 = new Ship(4)
    const ship2 = new Ship(3)
    const ship3 = new Ship(2)
    const ship4 = new Ship(1)

    const ships = [ship1,ship2,ship3,ship4]

    let shipsPlaced = 0;
    while (shipsPlaced < 4) {
      const x = Math.floor(Math.random()*10)
      const y = Math.floor(Math.random()*10)
      const isVertical = Math.floor(Math.random()*2)

      if (this.placeShip(ships[shipsPlaced],x,y,isVertical)) {
        shipsPlaced++
      }

    }


  }

  isPlacementPossible(ship, x, y, isVertical) {
    // check if original placement is out of bounds
    if (x < 0 || x > size - 1 || y < 0 || y > size - 1) return false

    // check if ship goes out of bounds
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
    return true

  }

  receiveAttack(x,y) {
    const position = this.board[x][y]
    if (position instanceof Ship) {
      position.hit()
      this.board[x][y] = 'hit'
    } else if (position == '') {
      this.missedShots[x][y] = true
    }
  }

  receiveAttackRandomly() {
    let x = Math.floor(Math.random()*10)
    let y = Math.floor(Math.random()*10)
    while ((this.missedShots[x][y] || this.board[x][y] == 'hit') && this.missedShots.length < 90) {
      x = Math.floor(Math.random()*10)
      y = Math.floor(Math.random()*10)
    }
    this.receiveAttack(x,y)
  }

  allShipsSunk() {
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (this.board[i][j] instanceof Ship) {
          if (!this.board[i][j].isSunk()) {
            return false
          }
        }
      }
    }
    return true
  }
}

// const gameboard = new Gameboard
//   const board = gameboard.board
//   const ship1 = new Ship(4)
//   const ship2 = new Ship(4)

//   gameboard.placeShip(ship1,0,4,true)
//   gameboard.placeShip(ship2,3,2,false)
//   gameboard.receiveAttack(2,4)

//   console.log(board)

