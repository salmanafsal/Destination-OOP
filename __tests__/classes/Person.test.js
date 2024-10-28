const Person = require("../../classes/Person");
const Bag = require("../../classes/Bag")

describe("Person class", ()=>{
    test("instance of the person class", ()=>{
        const person1 = new Person("Sal", "Boston");

        expect(person1 instanceof Person).toEqual(true)
    })

    test("name property assigned correctly", ()=>{
        const person1 = new Person("Sal", "Boston");

        expect(person1.name).toBe("Sal")

    })

    test("destination property assigned correctly", ()=>{
        const person1 = new Person("Sal", "Boston");
        
        expect(person1.destination).toBe("Boston")
    })

    // test("bags array is initialized as empty array", ()=>{
    //     const person1 = new Person("Ousman", "Cali");

    //     expect(person1.bags).toEqual([])
    // })

      test("getBags method returns an array", ()=>{
        const person1 = new Person("Sal", "Boston");
        const Bags = new Bag(1,2);
        person1.addBag(Bags)
        expect(person1.getBags()).toEqual([Bags])
    })



})