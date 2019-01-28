const Piece = require('../Piece');

module.exports = class Pion extends Piece
{
    constructor(color) {
        super(color);
    }

    canMove(game, from, to) {
        return this.whiteCanMove(game, from, to) ||
            this.blackCanMove(game, from, to);
    }

    whiteCanMove(game, from, to) {
        if (this.color == 'black')
            return true;
        if (from.y == 6 && from.x == to.x && from.y - to.y <= 2 &&
            game.grid.get(to).isFree())
            return true;
        if (from.y < 6 && from.x == to.x && from.y - to.y == 1 &&
            game.grid.get(to).isFree())
            return true;
        if (game.grid.get(to).isFree())
            return false;
        if (from.x - to.x == 1 && from.y - to.y == 1)
            return true;
        if (from.x - to.x == 1 && to.y - from.y == 1)
            return true;
        return false;
    }

    blackCanMove(game, from, to) {
        if (this.color == 'white')
            return true;
        if (from.y == 1 && from.x == to.x && to.y - from.y <= 2 &&
            game.grid.get(to).isFree())
            return true;
        if (from.y > 1 && from.x == to.x && to.y - from.y == 1 &&
            game.grid.get(to).isFree())
            return true;
        if (game.grid.get(to).isFree())
            return false;
        if (to.x - from.x == 1 && to.y - from.y == 1)
            return true;
        if (to.x - from.x == 1 && from.y - to.y == 1)
            return true;
        return false;
    }
}