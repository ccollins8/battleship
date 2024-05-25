import Ship from "../modules/Ship.js";

test("Ship constructor should create a ship with specified length", () => {
  const ship = new Ship(4);

  expect(ship.length).toBe(4);
  expect(ship.hits).toBe(0);
});

test("Ship.hit should increment the number of hits", () => {
  const ship = new Ship(3);
  ship.hit();
  ship.hit();
  expect(ship.hits).toBe(2);
});

test("Ship.isSunk should return false if not all hits taken", () => {
  const ship = new Ship(4);
  ship.hit();
  ship.hit();

  expect(ship.isSunk()).toBeFalsy(); // Use toBeFalsy for false values
});

test("Ship.isSunk should return true if all hits taken", () => {
  const ship = new Ship(3);
  ship.hit();
  ship.hit();
  ship.hit();

  expect(ship.isSunk()).toBeTruthy(); // Use toBeTruthy for true values
});
