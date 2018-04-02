/* 
Keyword this: A reserved keyword in javascript. Usually determined by how a function is called. 
    - In JS everytime a function is called two special keywords are given to that function arrgument and this. 
    - Can be determined using four rules (global, object/implicit, explicit, new)
1. Global: 
    - When 'this' is not indie of a declared object. 
        -Declared object. 
        - var data = {};
    - console.log(this) //window
    - Every variable declared in global scope is attached to the window object. 
*/
console.log(this); //window
function whatIsThis() {
    return this;
}
console.log(whatIsThis()); //window
//Global rule applies UNLESS inside a declared object. 

function variablesInThis() {
    this.person = "Elie";
}

variablesInThis();
console.log(person); //Elie

// In "use strict" the value of the keyword this inside of a function is undefined.

/* 
2. Implicit/Object: when the keyword 'this' IS inside of a declared object value of the keyword this is always the value of the closest parent object.
*/
var person = {
        firstName: "Elie",
        sayHi: function() {
            return "Hi " + this.firstName;
        },
        determineContext: function() {
            return this === person;
        }
    }
    //given this code what should the keyword this refer to?
var person = {
    firstName: "Elie",
    determineContext: this
};
// -> The window because there is NO function invoked.

//Nested Objects
var person = {
    firstName: "Colt",
    sayHi: function() {
        return "Hi " + this.firstName;
    },
    determineContext: function() {
        return this === person;
    },
    dog: {
        sayHello: function() {
            return "Hello " + this.firstName;
        },
        determineContext: function() {
            return this === person;
        }
    }
};
//What will these functions return when invoked?

/* 
3. Explicit Binding: Choose what we want the context of 'this' to be using the call, apply or bind methods.
    - These three methods can only be used by functions.
- Call: 
    - First argument is what you want the value of the keyword 'this' to be (thisArg) and can be set to whatever you want.
    - Arguments passed after the thisArg are any parameters that you want to pass to the function that you are changing the value of the keword 'this' in.     
    - When used on a function that function is immediatly invoked. 
- Apply: 
    - Similar to call but can only take two parameters at most.
    - First just like call is what you want the value of the keyword 'this' to be (thisArg).
    - Second is an array of arguments to pass to function. 
- Bind: 
    - Similar to call but instead of invoking the function of which it is called on right away bind returns a function definition, the value of the keyword this already set to the first parameter that you passed to the bind method.
    - Helpful when working with asynchronis code. 
*/

//CALL
var person = {
    firstName: "Colt",
    sayHi: function() {
        return "Hi " + this.firstName;
    },
    determineContext: function() {
        return this === person;
    },
    dog: {
        sayHello: function() {
            return "Hello " + this.firstName;
        },
        determineContext: function() {
            return this === person;
        }
    }
};

person.dog.sayHello.call(person); // "Hello Colt"
person.dog.determineContext.call(person); //true

//We do NOT invoke syaHello or determinecontext! Just attach call onto it. 
var colt = {
    firstName: "Colt",
    sayHi: function() {
        return "Hi " + this.firstName;
    }
};
var elie = {
    firstName: "Elie",
    sayHi: function() {
        return "Hi " + this.firstName;
    }
};

colt.sayHi(); //Colt
elie.sayHi(); //Elie 
//Works but very repetitive. How can we refactor the duplication using call?
var colt = {
    firstName: "Colt",
    sayHi: function() {
        return "Hi " + this.firstName;
    }
};
var elie = {
    firstName: "Elie"
};
colt.sayHi(); //Colt
colt.sayHi.call(elie); //Elie

//APLY: 
function addNumbers(a, b, c, d) {
    return this.firstName + " just calculated " + (a + b + c + d);
}
var colt = {
    firstName: "Colt"
}
var elie = {
    firstName: "Elie"
}
addNumbers.call(elie, 1, 2, 3, 4)
addNumbers.apply(elie, [1, 2, 3, 4]);
//When to use apply? When a function does not accept an array, apply will spread out value in an array for us!
function someValue(a, b, c) {
    return a + b + c;
}
var values = [4, 1, 2];
sumValues(values); //"4,1,2undefined"
sumValues.apply(this, [4, 1, 2]); //7

//BIND:
function addNumbers(a, b, c, d) {
    return this.firstName + " just calculated " + (a + b + c + d);
}

var elie = {
    firstName: "Elis"
}

var elieCalc = addNumbers.bind(elie, 1, 2, 3, 4);
elieCalc(); //Elie just calculated 10

//With bind we do not need to know all the arguments up front. 
var elieCalc = addNumbers.bind(elie, 1, 2);
elieCalc(3, 4); //Elie just calculated 10

var colt = {
    firstName: "Colt",
    sayHi: function() {
        setTimeout(() => {
            console.log("Hi " + this.firstName);
        }, 1000);
    }
};
//Because setTimeout is a method of the window object this will refer to global context.