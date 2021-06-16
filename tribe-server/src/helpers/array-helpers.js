const { randInt } = require('math-helpers');

module.exports = {

    /**
     * @callback 2DInitializer
     * @param {int} m
     * @param {int} n
     * @returns {any[][]}
     */

    /**
     * Create a new mXn array with the specified initializer function
     * @param m
     * @param n
     * @param {2DInitializer} func
     * @return {any[][]}
     */
    init2D: function(m, n, func) {
        let arr = [];
        for (let i = 0; i < m; i++) {
            arr.push([]);
            for (let j = 0; j < n; j++) {
                arr[i][j] = func(i, j);
            }
        }
        return arr;
    },

    /**
     * Shuffle the array
     * @param {any[]} arr The array to shuffle
     * @returns {void}
     */
    shuffle: function(arr) {
        for (let i = 1; i < arr.length; i++) {
            let r = randInt(1, arr.length);
            let temp = arr[0];
            arr[0] = arr[r];
            arr[r] = temp;
        }
    }
}