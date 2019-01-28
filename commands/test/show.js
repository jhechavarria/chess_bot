const { Command } = require('discord.js-commando');
const Game = require('../../core/Game');
const Jimp = require('jimp');

module.exports = class ShowCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'show',
			group: 'test',
			memberName: 'show',
			description: 'Montre l\'echequier'
		});
	}

	async run(message) {
        const game = new Game(this.client, message);
        game.load();

        //await this.print(game.grid.data);
		message.say('', {file: './assets/img/game.jpg'});
	}

    async print(grid) {
		const path_src = './assets/img/board.png';
        const path_dest = './assets/img/game.jpg';
        const coin_size = 88;
        const seps = {
            init: {x: 49, y: 48},
            inner: {x: 0, y: 0}
        };

        await Jimp.read(path_src)
            .then(async (image) => {
				for (let y = 0; y < 8; y++) {
					for (let x = 0; x < 8; x++) {
						let square = grid[y][x];
						let px = seps.init.x + seps.inner.x * x + coin_size * x;
                    	let py = seps.init.y + seps.inner.y * y + coin_size * y;

						if (square.isFree())
							continue;
						let color = square.piece.color;
						let name = square.piece.constructor.name.toLowerCase();
						let path = './assets/img/pieces/' + color + '_' + name + '.png';
						await Jimp.read(path)
							.then(piece => {
								piece.resize(coin_size, coin_size);
								image.blit(piece, px, py)
							}).catch(console.error);
					}
				}
                return image.write(path_dest);
            })
            .catch(console.error);
    }
};