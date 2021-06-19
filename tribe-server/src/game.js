const fs = require('fs');
const EventManager = require("./event-manager");
const { shuffle, init2D } = require('./helpers/array-helpers');
const { Board } = require('./board');
const { randInt } = require('./helpers/math-helpers');

module.exports = class Game {

    playerCount;
    players;
    board;

    eventManager;

    tribePath = 'src/assets/tribes.json';
    tribeCards;

    rollResult;

    constructor(players) {
        let playerCount = players.length;
        this.playerCount = playerCount;
        this.board = new Board(playerCount);
        this.loadTribeCards();

        this.eventManager = new EventManager()
    }

    /**
     * Load Event cards from asset file
     */
    loadTribeCards() {
        let text = fs.readFileSync(this.tribePath)
        this.tribeCards = JSON.parse(text);
    }

    /**
     * Get data to display for the Tribe card with the specified name
     * @param {string} cardName
     * @return {object}
     */
    getTribeCardData(cardName) {
        return this.tribeCards[cardName];
    }

    /**
     * Roll two die and return the results.
     * @return {int[]}
     */
    roll() {
        this.rollResult = new Array(2).map(() => randInt(0, 3));
        if (this.rollResult[0] === this.rollResult[1]) {
            this.eventManager.tryTriggerEvent();
        }
        return this.rollResult;
    }

}