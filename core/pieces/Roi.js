const Piece = require('../Piece');

module.exports = class Roi extends Piece
{
    constructor(color) {
        super(color);
    }

    canMove(game, from, to) {
        for (let y = from.y - 1; y <= from.y + 1; y++) {
            for (let x = from.x - 1; x <= from.x + 1; x++) {
                if (y == to.y && x == to.x)
                    return true;
            }
        }
        return false;
    }
}