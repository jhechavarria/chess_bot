module.exports = class Square
{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.piece = null;
        this.colors = ['A', 'B', 'C', 'E', 'F', 'G', 'H'];
    }

    isFree() {
        return this.piece == null;
    }

    put(piece) {
        if (this.piece)
            return false;

        this.piece = piece;
        return true;
    }

    take() {
        if (!this.piece)
            return false;

        const piece = this.piece;
        this.piece = null;
        return piece;
    }

    replace(new_piece) {
        const old_piece = this.take();

        return this.put(new_piece) ? old_piece : false;
    }

    getCoords() {
        return {
            x: this.colors[this.x],
            y: this.y + 1
        };
    }

    toObject() {
        let piece = this.piece != null ? this.piece.toObject() : null;

        return {
            x: this.x,
            y: this.y,
            piece: piece
        };
    }
}