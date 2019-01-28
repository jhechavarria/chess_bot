module.exports = class Piece
{
    constructor(color) {
        this.color = color;
    }

    move(game, from, to) {
        if (from.y == to.y && from.x == to.x)
            return false;
        if (!this.canEat(game, from, to))
            return false;
        if (!this.canMove(game, from, to))
            return false;
        if (!this.pathIsFree(game, from, to))
            return false;
        this.eat(game, from, to);
        return true;
    }

    canEat(game, from, to) {
        let square = game.grid.get(to);

        if (!square.isFree() && this.color == square.piece.color)
            return false;
        return true;
    }

    pathIsFree(game, from, to) {
        return true;
    }

    eat(game, from, to) {
        let dead = game.grid.data[to.y][to.x].take();
        if (dead)
            game.deads.put(dead);

        let winner = game.grid.data[from.y][from.x].take();
        game.grid.data[to.y][to.x].put(winner);
    }

    toObject() {
        return {
            name: this.constructor.name,
            color: this.color
        };
    }
}