class Plane {
    constructor(company, origin, destination) {
        this.company = company;         // Public property
        this.origin = origin;           // Public property
        this.destination = destination; // Public property
        this.passengers = [];           // Private property
    }

    getPassengers() {
        return this.passengers;
    }

    addPassenger(passenger) {
        this.passengers.push(passenger);
    }

}


module.exports = Plane;