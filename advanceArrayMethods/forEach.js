/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
function doubleValues(arr) {
    let newArray = [];
    arr.forEach(function(val) {
        let newNum = val * 2;
        newArray.push(newNum);

    })
    return newArray;
}
var arr1 = [1, 2, 3, 4];
console.log(doubleValues(arr1));

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr) {
    let newArray = [];
    arr.forEach(function(val) {
        if (val % 2 == 0) {
            newArray.push(val);
        }
    })
    return newArray;
}
console.log(onlyEvenValues(arr1));

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'udemy']) // ["ct", "mt", "tm", "uy"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr) {
    let newArray = [];
    arr.forEach(function(val) {
        let lastLetter = val.length - 1;
        newArray.push(val[0] + val[lastLetter]);
    })
    return newArray;
}

var words = ["Christina", "Tommy", "Leia"];
console.log(showFirstAndLast(words));

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr, key, value) {
    let newArray = [];
    arr.forEach(function(val) {
        val.title = value;
        newArray.push(val);
    })
    return newArray;
}

var arr2 = [{ name: 'Elie' }, { name: 'Time' }, { name: 'Matt' }, { name: 'Colt' }];
var newKey = 'title';
var newValue = 'instructor';
console.log(addKeyAndValue(arr2, newKey, newValue));

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str) {
    strArr = (str.split(""));
    console.log(strArr);
    let obj = {};
    let iCount = 0;
    let aCount = 0;
    let eCount = 0;
    let oCount = 0;
    let uCount = 0;
    strArr.forEach(function(letter) {
        switch (letter) {
            case "i":
                iCount += 1;
                obj.i = iCount;
                break;
            case "I":
                iCount += 1;
                obj.i = iCount;
                break;
            case "a":
                aCount += 1;
                obj.a = aCount;
                break;
            case "A":
                aCount += 1;
                obj.a = aCount;
                break;
            case "e":
                eCount += 1;
                obj.e = eCount;
                break;
            case "E":
                eCount += 1;
                obj.e = eCount;
                break;
            case "o":
                oCount += 1;
                obj.o = oCount;
                break;
            case "O":
                oCount += 1;
                obj.oCount;
                break;
            case "u":
                uCount += 1;
                obj.u = uCount;
                break;
            case "U":
                uCount += 1;
                obj.u = uCount;
                break;
        }
    })
    return obj;
}

console.log(vowelCount("I Am awesome and so are you"));

function betterVowelCount(string) {
    var splitArr = str.split("");
    var obj = {};
    var vowels = "aeiou";

    splitArr.forEach(function(letter) {
        if (vowels.indexOf(letter.toLowerCase()) !== -1) {
            if (letter in obj) {
                obj[letter]++;
            } else {
                obj[letter] = 1;
            }
        }
    })
    return obj;
}