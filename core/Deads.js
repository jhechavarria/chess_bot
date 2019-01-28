const Converter = require('./Converter');

module.exports = class Deads
{
    constructor() {
        this.pieces = {
            black: [],
            white: []
        };
    }

    load(data) {
        for (let cidx in data) {
            for (let pidx in data[cidx]) {
                let piece = Converter.piece(data[cidx][pidx]);

                this.pieces[cidx][pidx] = piece;
            }
        }
    }

    has(piece, color) {
        for (let idx in this.pieces[color]) {
            let dead = this.pieces[color];

            if (dead.constructor.name == piece.name ||
                dead.constructor.name == piece) {
                return true;
            }
        }
        return false;
    }

    put(piece) {
        this.pieces[piece.color].push(piece);
    }

    take(piece, color) {
        for (let idx in this.pieces[color]) {
            let dead = this.pieces[color][idx];

            if (dead.constructor.name == piece.name ||
                dead.constructor.name == piece) {
                this.pieces[color].splice(idx, 1);
                return dead;
            }
        }
        return false;
    }

    empty(color=null) {
        if (color != null)
            this.pieces[color] = [];
        else {
            this.pieces.white = [];
            this.pieces.black = [];
        }
    }

    toObject() {
        const data = {black: [], white: []};

        for (let oidx in this.pieces) {
            for (let pidx in this.pieces[oidx]) {
                data[oidx][pidx] = this.pieces[oidx][pidx].toObject();
            }
        }
        return data;
    }
}