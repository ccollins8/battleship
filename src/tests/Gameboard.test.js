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
  console.log(board)
  expect(board[4][4]).toBe(ship)
  expect(board[5][4]).toBe(ship)
  expect(board[6][4]).toBe(ship)
  expect(board[7][4]).toBe(ship)
  
});

test('receiveAttack on empty location adds miss to missedShots', () => {
  const gameboard = new Gameboard();
  gameboard.receiveAttack(0, 0);
  expect(gameboard.missedShots).toEqual([[0, 0]]);
});

test('receiveAttack on ship registers first hit', () => {
  const gameboard = new Gameboard();
  const ship = new Ship(2);
  gameboard.placeShip(ship, 1, 2, true); // Place a ship vertically at (1, 2)
  gameboard.receiveAttack(1, 2); // Attack the ship at (1, 2)
  expect(ship.hits).toBe(1)
});

test('receiveAttack on already hit ship location does nothing', () => {
  const gameboard = new Gameboard();
  const ship = new Ship(2);
  gameboard.placeShip(ship, 1, 2, true); // Place a ship vertically at (1, 2)
  gameboard.receiveAttack(1, 2); // Attack the ship at (1, 2) (first hit)
  gameboard.receiveAttack(1, 2); // Attack the same location again
  expect(ship.hits).toBe(1); // Ship should still be hit only once
});

test('receiveAttack on out-of-bounds location throws error', () => {
  const gameboard = new Gameboard();
  expect(() => gameboard.receiveAttack(10, 10)).toThrowError();
});



