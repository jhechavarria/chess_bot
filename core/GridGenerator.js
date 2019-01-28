const Square = require('./Square');
const Pion = require('./pieces/Pion');
const Reine = require('./pieces/Reine');
const Roi = require('./pieces/Roi');
const Fou = require('./pieces/Fou');
const Cavalier = require('./pieces/Cavalier');
const Tour = require('./pieces/Tour');

module.exports = class GridGenerator
{
    constructor() {
        this.ordered = [Tour, Cavalier, Fou, Reine, Roi, Fou, Cavalier, Tour];

        this.setGrid();
        this.setBlacks();
        this.setWhites();
    }

    setGrid() {
        this.grid = [];

        for (let y = 0; y < 8; y++) {
            this.grid[y] = [];
            for (let x = 0; x < 8; x++) {
                this.grid[y][x] = new Square(x, y);
            }
        }
    }

    setBlacks() {
        for (let idx in this.ordered) {
            let piece = this.ordered[idx];

            this.grid[0][idx].piece = new piece('black');
        }

        for (let x = 0; x < 8; x++) {
            this.grid[1][x].piece = new Pion('black');
        }
    }

    setWhites() {
        for (let idx in this.ordered) {
            let piece = this.ordered[idx];

            this.grid[7][idx].piece = new piece('white');
        }

        for (let x = 0; x < 8; x++) {
            this.grid[6][x].piece = new Pion('white');
        }
    }
}