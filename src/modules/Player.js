import Gameboard from "./Gameboard"

export default class Player {
    
    constructor(name, isReal) {
        this.name = name
        if (isReal == true) {
            this.type = 'real'
        } else {
            this.type = 'computer'
        }
        this.gameboard = new Gameboard
    }
}