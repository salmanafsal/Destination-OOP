class Airport {

#Plane = [];
constructor(name, airportCode)
{

this.name = name;
this.airportCode = airportCode;


}

getPlanes()
{

    return this.#Plane;

}

addPlane(plane)
{

    this.#Plane.push(plane);

}

}


module.exports = Airport;