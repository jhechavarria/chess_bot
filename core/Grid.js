const GridGenerator = require('./GridGenerator');
const Square = require('./Square');
const Piece = require('./Piece');
const Converter = require('./Converter');
const Coord = require('./Coord');

module.exports = class Grid
{
    constructor() {
    }

    generate() {
        this.data = new GridGenerator();
        this.data = this.data.grid;
    }

    load(data) {
        this.data = [];

        for (let y = 0; y < 8; y++) {
            this.data[y] = [];
            for (let x = 0; x < 8; x++) {
                let square = data[y][x];

                this.data[y][x] = new Square(x, y);
                if (square.piece != null)
                    this.data[y][x].piece = Converter.piece(square.piece);
            }
        }
    }

    has(coord) {
        return this.data[coord.y][coord.x] != undefined;
    }
    
    get(coord) {
        return this.data[coord.y][coord.x];
    }

    pieceIsMine(turn, coord) {
        const square = this.get(coord);

        return !square.isFree() && (
            (turn == 0 && square.piece.color == 'white') ||
            (turn == 1 && square.piece.color == 'black')
        );
    }

    move(game, from, to) {
        let square = this.data[from.y][from.x];

        if (square.isFree())
            return false;

        return square.piece.move(game, from, to);
    }

    toObject() {
        const data = [];

        for (let y = 0; y < 8; y++) {
            data[y] = [];
            for (let x = 0; x < 8; x++) {
                let square = this.data[y][x];

                data[y][x] = square.toObject();
            }
        }
        return data;
    }
}