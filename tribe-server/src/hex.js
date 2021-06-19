
module.exports = class Hex {

    static hexTypes = {
        forest: 0,
        lake: 1,
        mountain: 2
    }

    hexType;
    resources = [];

    constructor(type) {
        this.hexType = type;
    }
}