import Gameboard from "../modules/Gameboard";
import Ship from "../modules/Ship"

test("buildBoard should create a 10x10 board with empty cells", () => {
  const board = new Gameboard().buildBoard();

  // Assert board size
  expect(board.length).toBe(10); // Check number of rows
  expect(board[0].length).toBe(10); // Check number of columns in the first row (all rows should have the same)

  // Assert all cells are empty
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      expect(board[i][j]).toBe(""); // Check each cell value
    }
  }
});

test("place a ship", () => {
  const gameboard = new Gameboard
  const board = gameboard.board
  const ship = new Ship(4)

  gameboard.placeShip(ship,4,4,true)
  expect(board[4][4]).toBe(ship)
  expect(board[5][4]).toBe(ship)
  expect(board[6][4]).toBe(ship)
  expect(board[7][4]).toBe(ship)
  expect(board[8][4]).toBe('')
});

