

module.exports = {
    /**
     * Generate a random integer in the range [a, b)
     * @param a Inclusive minimum
     * @param b Exclusive maximum
     * @return {number}
     */
    randInt: function(a, b) {
        return Math.floor(Math.random() * (b - a) + a)
    }
}