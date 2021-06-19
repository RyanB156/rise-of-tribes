const { shuffle, init2D } = require('./helpers/array-helpers');
const { randInt } = require('./helpers/math-helpers');

module.exports = class EventManager {

    eventPath = 'src/assets/events.json';
    eventCards;
    eventCardStack = [];
    activeEvents = [];

    constructor() {
        this.loadEventCards();
    }

    /**
     * Load Event cards from asset file
     */
    loadEventCards() {
        console.log('EventManager.loadEventCards')
        let text = fs.readFileSync(this.eventPath)
        this.eventCards = JSON.parse(text);
        for (let card in this.eventCards) {
            this.eventCardStack.push(this.eventCards[card]);
        }
        shuffle(this.eventCardStack);
    }

    /**
     * Get data to display for the Event card with the specified name
     * @param {string} cardName
     * @return {object}
     */
    getEventCardData(cardName) {
        console.log('EventManager.getEventCardData', cardName);
        return this.eventCards[cardName];
    }

    /**
     * Trigger an event if the event queue is not full.
     */
    tryTriggerEvent() {
        console.log('EventManager.tryTriggerEvent');
        if (this.activeEvents.length < 2) {
            this.activeEvents.push(this.eventCardStack.pop());
            return true;
        }
        return false;
    }

    /**
     * Clear the specified event
     * @param {string} eventName
     * @return {boolean} true if the event was cleared, false otherwise
     */
    clearEvent(eventName) {
        console.log('EventManager.clearEvent', eventName);
        // Remove first event.
        if (this.activeEvents.length > 1 && this.activeEvents[0] === eventName) {
            let event = this.activeEvents.shift();
            // Put event card back in the deck and shuffle
            this.activeEvents.push(event);
            shuffle(this.activeEvents);
            return true;
        } else if (this.activeEvents.length === 2 && this.activeEvents[1] === eventName) {
            let event = this.activeEvents.pop();
            // Put event card back in the deck and shuffle
            this.activeEvents.push(event);
            shuffle(this.activeEvents);
            return true;
        } else {
            return false;
        }
    }

    /**
     * Get the events in the event queue
     * @return {*[]}
     */
    getActiveEvents() {
        console.log('EventManager.getActiveEvents');
        return this.activeEvents;
    }
}