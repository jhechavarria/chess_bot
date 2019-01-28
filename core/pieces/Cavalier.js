const Piece = require('../Piece');

module.exports = class Cavalier extends Piece
{
    constructor(color) {
        super(color);
    }

    canMove(game, from, to) {
        for (let y = -2; y <= 2; y++) {
            if (y == 0)
                continue;
            if (y % 2 && (from.x + 2 == to.x || from.x - 2 == to.x)
                && from.y + y == to.y)
                return true;
            else if ((from.x + 1 == to.x || from.x - 1 == to.x)
                && from.y + y == to.y)
                return true;
        }
        return false;
    }
}