/*
OOP Defined: 
    - A programming model based around the idea of objects. 
    - These objects are constructed from what are called "classes", which we can thing of like a blueprint. We call these objects created from classes "instances"
    - we strive to make our classes abstract and modular.  
Before ES06 Javascript didn't have classes so we use objects and functions to make our own classes. 
-->Constructor Functions
*/

function House(bedrooms, bathrooms, numSqft) {
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.numSqft = numSqft;
}
var firstHouse = House(2, 2, 1000);
firstHouse //undefined

var firstHouse = new House(2, 2, 1000);
firstHouse.bedrooms; // 2

/* 
What does the new keyword do? 
    1. It first creates an empty object. 
    2. It then sets the keyword 'this' to be that empty object. 
    3. It adds the line `return this` to the end of the function, which links the prototype property on the constructor function to the empty object.
*/

/*
Create a constructor function for a dog. 
Each dog should have a name and an age. 
As a bonus add a function for each dog called 'bark', which console.log's the name of the dog added to the string 'just barked!'
*/

function Dog(name, age) {
    this.name = name;
    this.age = age;
    this.bark = function() {
        console.log(this.name + " just barked!");
    }
}

var myDog = new Dog("Leia", 1);
myDog.bark();