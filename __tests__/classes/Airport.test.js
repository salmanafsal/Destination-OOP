const Airport = require("../../classes/Airport")
const Plane = require("../../classes/Plane");
describe("Airport test", ()=>{
    test("name is assigned correct value", ()=>{
        const airport1 = new Airport("LA Guardia","LGA")
        expect(airport1 instanceof Airport).toEqual(true)
    })

    test('should initialize planes array as an empty array', () => {
        // Check that planes array initializes as empty
        const airport1 = new Airport("LA Guardia","LGA")
        expect(airport1.getPlanes()).toEqual([]);
    });

    test('Check if I am able to add a plan', () => {
        // Check that planes array initializes as empty
        const airport1 = new Airport("LA Guardia","LGA")
        const Plane1 = new Plane ("Boeing", "USA", "AUS");
        airport1.addPlane(Plane1);
        expect( airport1.getPlanes()).toEqual([Plane1]);
    });

})