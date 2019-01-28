const Piece = require('../Piece');

module.exports = class Tour extends Piece
{
    constructor(color) {
        super(color);
    }

    canMove(game, from, to) {
        if (from.x == to.x && from.y != to.y)
            return true;
        if (from.y == to.y && from.x != to.x)
            return true;
        return false;
    }

    pathIsFree(game, from, to) {
        let [addx, addy] = from.x == to.x ? [0, from.y < to.y ? 1 : -1] : [from.x < to.x ? 1 : -1, 0];
        for (let x = from.x + addx, y = from.y + addy; y != to.y; x += addx, y += addy) {
            if (!game.grid.data[y][x].isFree())
                return false;
        }
        return true;
    }
}