class Entry {
    constructor({ duckCount, foodId, time, location, quantity }){
        this.duckCount = duckCount;
        this.foodId = foodId;
        this.time = time;
        this.location = location;
        this.quantity = quantity;
    }
}

module.exports = Entry;