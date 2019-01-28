const Pion = require('./pieces/Pion');
const Reine = require('./pieces/Reine');
const Roi = require('./pieces/Roi');
const Fou = require('./pieces/Fou');
const Cavalier = require('./pieces/Cavalier');
const Tour = require('./pieces/Tour');

module.exports = class Converter
{
    static piece(data, save=false) {
        const pieces = [Tour, Cavalier, Fou, Reine, Roi, Pion];

        if (save)
            return data.toObject();

        for (let idx in pieces) {
            let piece = pieces[idx];

            if (piece.name != data.name)
                continue;
            return new piece(data.color);
        }
    }
}