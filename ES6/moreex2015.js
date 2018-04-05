//Default parameters
function add(a = 2, b = 2) {
    return a + b;
}

add(); //4
add(1); //3

//For...of
var arr = [1, 2, 3, 4, 5];
for (let val of arr) {
    console.log(val);
}
//Can not use a for of loop to itterate over an object.

//REST opperator
//collects remaining arguments in a function and returns them in an array;

function printArguments(a, b, ...c) {
    console.log(a);
    console.log(b);
    console.log(c);
}