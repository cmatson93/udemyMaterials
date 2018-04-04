/* 
Inheritance: The passing of methods and properties from one class to another. 
    - In javascript you pass the prototype property of one constructor to another. 
        - Since prototype property is where these live need another function to get all those properties. 
Object.create: Creates a brand new function and accepts as its first parameter, what the prototype object should be for the newly created object. 
    - Why not use the 'new' keyword? 
    - This will do almost the same thing, but add additional unnecessary properties on the prototype object(since it is creating an object with undefined properties just for the prototype).
*/

function Student(firstName, lastName) {
    return Person.apply(this, arguments);
}
//Set the prototype to be an object created with another prototype.
Student.prototype = Object.create(Person.prototype);
//Reset the constructor property. 
Student.prototype.constructor = Student;

// 1 - Create a constructor function for a Vehicle. Each vehicle should have a make, model and year property.
function Vehicle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
};
// 2 - Add a function to the Vehicle prototype called start which returns the string "VROOM!"
Vehicle.prototype.start = function() {
    return "VROOM!";
}

// 3 - Add a function to the Vehicle prototype called toString which returns the string "The make, model, and year are" concatenated with the make, model and year property

/* Examples 
    var vehicle = new Vehicle("Tractor", "John Deere", 1999)
    vehicle.toString() // 'The make, model, and year are Tractor John Deere 1999'
*/

Vehicle.prototype.toString = function() {
        return "The make, model, and year are " + this.make + " " + this.model + " " + this.year;
    }
    // 4 - Create a constructor function for a Car. Each object created from the Car function should also have a make, model, and year and a property called numWheels which should be 4. The Car prototype should inherit all of the methods from the Vehicle prototype
function Car(make, model, year) {
    Vehicle.apply(this, arguments);
    this.numWheels = 4;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

// 5 - Create a constructor function for a Motorcycle. Each object created from the Motorcycle function should also have a make, model, and year and a property called numWheels which should be 2. The Motorcycle prototype should inherit all of the methods from the Vehicle prototype

function Motorcycle(make, model, year) {
    Vehicle.apply(this, arguments);
    this.numWheels = 2;
};

Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.constructor = Motorcycle;