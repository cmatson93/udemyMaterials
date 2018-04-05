/* 
- let, const
- template strings 
- arrow functions
- default params
- rest and spread operators
- for... of loops
- object shorthand notation
- class
- promises 
...and so much more! 
*/

//CONST
//Allows us to create variable that can not be redeclared. 

var firstIntructor = "colt";
firstIntructor = "elie";
//ok 
const secondInstructor = "christina";
secondInstructor = "tommy";
// Not ok

//const does not make objects imutable 

//LET
//block scope: 
//Hoisting with let does not happen. 
//When should we use let. When working inside of a block and don't want them accessible outside use let. 

/*
Template strings or string interperlation
*/

var firstName = "Elie";
var lastName = "Schoppik";
var greeting = "Hello " + firstName + " " + lastName;
console.log(greeting);
var templateGreeting = `Hello ${firstName} ${lastName}`;
console.log(templateGreeting);

//Multi line strings
var multiLineString = `hello 
how
 nice
  is this!
`;

//Arrow Functions 
var add = function(a, b) {
    return a + b;
};
//es6
var add = (a, b) => {
    return a + b;
};
var addOneLine = (a, b) => a + b;

function doubleAndFilter(arr) {
    return arr.map(function(value) {
        return value * 2;
    }).filter(function(value) {
        return value % 3 === 0;
    })
};
doubleAndFilter9([5, 10, 15, 20]);

var doubleAndFilter2 = arr => arr.map(val => val * 2).filter(num => num % 3 === 0);

/* 
Arrow functions do not get their own keyword this. 
    - Inside of an arrow function the keyword this is the value right outside of it. 
*/