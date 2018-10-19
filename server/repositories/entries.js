class Entries {
    constructor() {
        this.data = [];
    }

    add(model) {
        this.data.push(model);
        console.log('this.data.length', this.data.length);
    }
}

module.exports = new Entries();