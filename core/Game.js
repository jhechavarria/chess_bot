const fs = require('fs');
const Grid = require('./Grid');
const Deads = require('./Deads');
const Coord = require('./Coord');

module.exports = class Game
{
    constructor(client, message) {
        this.client = client;
        this.message = message;
        this.me = message.author;
        this.players = [];
        this.colors = ['A', 'B', 'C', 'E', 'F', 'G', 'H'];
        this.deads = new Deads();
        this.grid = new Grid();
        this.turn = 0;
    }

    start(oponent) {
        this.players = [this.message.author, oponent];
        this.grid.generate();
    }

    load() {
        const data = require('../game.json');

        this.deads.load(data.deads);
        this.turn = data.turn;
        this.grid.load(data.grid);
        this.players = [];
        for (let idx in data.players) {
            let id = data.players[idx];
            let player = this.client.users.find('id', id);

            this.players.push(player);
        }
        this.oponent = this.players[!this.players.indexOf(this.me)];
    }

    canPlay() {
        return this.players[this.turn] == this.me;
    }

    skip() {
        this.turn = this.turn ? 0 : 1;
    }

    toObject() {
        const data = {
            players: [],
            grid: this.grid.toObject(),
            deads: this.deads.toObject(),
            turn: this.turn
        };
        for (let idx in this.players)
            data.players[idx] = this.players[idx].id;
        return data;
    }

    save() {
        const data = this.toObject();

        fs.writeFile('./game.json', JSON.stringify(data), err => {
            if (err != null)
                console.error(err);
        });
    }
}