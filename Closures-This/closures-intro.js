/*
Closure: A function that makes use of variables defined in outer functions that have prevously returned. 
*/

function outer() {
    var start = "Closures are";
    return function inner() {
        return start + " " + "awesome";
    }
}

outer();
//Returns: 
/*function inner(){
    return start + " " + "awesome"
}*/
outer()();
/* Returns: 
"Closures are awesome" */

//Only variables used in the inner function are remebered!

function outerFn() {
    var data = "something from outerFn";
    var fact = "Remember me!";
    return function innerFn() {
        debugger
        return fact;
        //fact is available here but not data
    }
}
//Only variables used in the inner function are remembered!

//Create Private Variable, a variable that can only be accessed in a certain scope and can not be modified by an external scope. 

function counter() {
    var count = 0;
    return function inner() {
        count++;
        retunr count;
    }
}

var counter1 = counter();
counter1(); //1
counter1(); //2
counter2(); //1
//Each function has it's own private count variable. 
//Closure creates a private variable. 

function classroom() {
    var instructors = ["Elie", "Colt"];
    return {
        getInstructors: function() {
            return instructors;
        },
        addInstructor: function(instructor) {
            instructors.push(instructor);
            return instructors;
        }
    }
}

var first = classRoom();

/* 
4. The 'new' keyword
    - We can set the context of the keyword 'this' using the 
    'new' keyword.
    - This referes to the 'new' object created.
*/