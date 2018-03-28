//Is invoked on an array and creates a new one. 
//Iterates through an array
//Runs a callback function for each value in the array.
//Adds the result of that callback function to the new array. 
//Returns the new array
// ---> map ALWAYS returns a new array of the SAME length.


function map(array, callback) {
    var newArray = [];
    for (var i = 0; i < array.lenght; i++) {
        newArray.push(callback(array[i], i, array));
    }
    return newArray;
}

//Useful for extracting values from an object 
function onlyFirstName(arr) {
    return arr.map(function(val) {
        return val.first;
    });
}

onlyFirstName([{ first: 'Tim', last: 'Garcia' }, { first: 'Matt', last: 'Lane' }]);

/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([1,-2,-3]) // [2,-4,-6]
*/

function doubleValues(arr) {
    return arr.map(function(val) {
        return val * 2;
    })
}
const nums = [1, 2, 3];
console.log(doubleValues(nums));

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr) {
    return arr.map(function(val) {
        return val * arr.indexOf(val);
    })
}

console.log(valTimesIndex(nums));

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arr, key) {
    return arr.map(function(val) {
        return val[key];
    })
}

console.log(extractKey([{ name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }, { name: 'Colt' }], 'name'));

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr) {
    return arr.map(function(val) {
        return val.first + " " + val.last;
    })
}
console.log(extractFullName([{ first: 'Elie', last: "Schoppik" }, { first: 'Tim', last: "Garcia" }, { first: 'Matt', last: "Lane" }, { first: 'Colt', last: "Steele" }]));