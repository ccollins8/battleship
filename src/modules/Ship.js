export default class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
  }

  hit() {
    this.hits += 1;
  }

  isSunk() {
    if (this.hits == this.length) {
      return true;
    } else {
      return false;
    }
  }
}

const ship1 = new Ship(4);
ship1.hit();
ship1.hit();
ship1.hit();
console.log(ship1.isSunk());
ship1.hit();
console.log(ship1);
console.log(ship1.isSunk());
