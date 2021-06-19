const { Hex } = require('./hex');
const { shuffle } = require('./helpers/array-helpers');

module.exports = class Board {

    numPlayers;
    numTiles;
    tilePaths;
    tiles;

    constructor(numPlayers) {
        this.numPlayers = numPlayers;
        this.setPaths(numPlayers);
        this.setHexes(numPlayers);
    }

    /**
     * Create adjacency lists for the route between tiles
     * @param {int} num
     */
    setPaths(num) {
        switch (num) {
            case 2:
                this.numTiles = 9;
                this.tilePaths = [
                    [1, 3],
                    [0, 2, 3, 4],
                    [1, 4, 5],
                    [0, 1, 4, 6],
                    [1, 2, 3, 5, 6, 7],
                    [2, 4, 7, 8],
                    [3, 4, 7],
                    [4, 5, 6, 8],
                    [5, 7]
                ]
                break;
            case 3:
                this.numTiles = 12;
                this.tilePaths = [
                    [1, 3, 4],
                    [0, 2, 4, 5],
                    [1, 5, 6],
                    [0, 4, 7],
                    [0, 1, 3, 5, 7, 8],
                    [1, 2, 4, 6, 8, 9],
                    [2, 5, 9],
                    [3, 4, 8, 10],
                    [4, 5, 7, 9, 10, 11],
                    [5, 6, 8, 11],
                    [7, 8, 11],
                    [8, 9, 10]
                ]
                break;
            default:
                this.numTiles = 15;
                this.tilePaths = [
                    [1, 2, 3],
                    [0, 3, 4],
                    [0, 3, 5, 6],
                    [0, 1, 2, 4, 6, 7],
                    [1, 3, 7, 8],
                    [2, 6, 9, 10],
                    [2, 3, 5, 7, 10, 11],
                    [3, 4, 6, 8, 11, 12],
                    [4, 7, 12],
                    [5, 10, 13],
                    [5, 6, 9, 11, 13, 14],
                    [6, 7, 10, 12, 14],
                    [7, 8, 11],
                    [9, 10, 14],
                    [10, 11, 13]
                ]
                break;
        }
    }

    /**
     * Create hexes for the board
     * @param {int} num
     */
    setHexes(num) {
        this.tiles = [];
        for (let i = 0; i < this.numTiles; i += 3) {
            this.tiles.push(new Hex(Hex.hexTypes.forest));
            this.tiles.push(new Hex(Hex.hexTypes.lake));
            this.tiles.push(new Hex(Hex.hexTypes.mountain));
        }
        shuffle(this.tiles);
    }

}