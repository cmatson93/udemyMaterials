/* 
    In javacript every constructor function has a property on it called "prototype", which is an object. 
    - the prototype object has a property on it called "constructor", which points back to the constructor function. 
    - Anytime an object is created using the 'new' keyword, a property call "_proto_" gets created, linking the object and the prototype property of the constructor function.  
*/
//FUN FUN FUNCTION:

// function talk(sound) {
//     console.log(sound)
// }
talk('woof'); //woof

function talk(sound) {
    console.log(this)
    console.log(this.sound)
}
// talk('woof'); //undefined
//this is the global object aka the window.

let animal = {
    talk: talk
}
animal.talk();

let cat = {
    sound: 'meow!'
}

Object.setPrototypeOf(cat, animal);
cat.talk()




function Person(name) {
    this.name = name;
}

/* 
    - Create a constructor function for a vehicle:
        -Every object created from this constructor should have a make, model and year property. 
        -Each object should also have a property called isRunning, which should be set to false. 
    - Every object created from the Vehicle constructor should have a function called turnOn, which changes the isRunning property to true.
    - Every object created from the Vehicle constructor should have a function called turnOff, which changes the isRunning property to false.  
    - Every object created from the vehicle constructor should have a method called honk, which returns the string "beep" ONLY if the isRunning property is true. 
*/

function Vehicle(make, model, year) {
    make = this.make;
    model = this.model;
    year = this.year;
    isRunning = false;
}

Vehicle.prototype.turnOn = function() {
    this.isRunning = true;
};
Vehicle.prototype.turnOff = function() {
    this.isRunning = false;
};
Vehicle.prototype.honk = function() {
    if (this.isRunning === true) {
        return "beep";
    }
}