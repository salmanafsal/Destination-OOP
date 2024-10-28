class Person {

    constructor(name, destination) {
        this.name = name;                // Public property
        this.destination = destination;  // Public property
        this.bags = [];                  // Private property
    }

    addBag(bag) {
        this.bags.push(bag);
    }

    getBags() {
        return this.bags;
    }
}


module.exports = Person;