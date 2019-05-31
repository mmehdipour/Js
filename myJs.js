/*
    JavaScript

    JS is the programming language of HTML and the web.
    It is used to program the behaior of web pages.
    It is 'kind of' an object-oriented programming language (OOP).
    In JS, objects:
        - are general containers of property:value pairs
        - can contain other objects
    
    Functions are considered values
        - can be anonymous, meaning they don't need identifiers
        - Can be passed as a method argument (paramater)

    Not compiled - it's interpreted
    Loosely typed - var, let
    Pass by value
    Scripting Langugage

    Data Types:
        Primitives
            - Number
            - String
            - Boolean
        Objects - property value pairs
        Undefined - default for undeclared variables
        Null
        NaN
*/

// use console.log() to print to browser console.
// typeof() is used to get the type of a variable
console.log(typeof(NaN));

// You 'must' include a semi-colon at the end of each statement.
var a = 3;
console.log('a is: ' + typeof(a));
a = "boo";
console.log('a is: ' + typeof(a));
a = true;
console.log('a is: ' + typeof(a));

// Objects

var person = {
    firstName : "Matt",
    lastName : "Ruiz",
    middleName: "Zachary",
    // In a function definition, 'this' refers to the "owner"
    // of the function (fn).
    // 'this' is the person object, that "owns" the fullName fn
    fullName : function() {
        return this.firstName + " " +
         this.middleName + " " + this.lastName;
    }
}

// == vs ===
// == loose equality operator
console.log('== ' + (7 == '7'));
// === strict operator
console.log('=== ' + (7 === '7'));

// callback functions
//  - A function that is to be executed after another function has
//      finished executing

// Higher-order function
//  - A function that takes a function as an argument

function doHomework(subject, callback) {
    // alert() creates a pop-up window in your browser
    // alert('Starting my ' + subject + ' homework');
    // Use backticks to include variables inside of string.
    alert(`Starting my ${subject} homework.`);
    callback(notFinished);
}
function alertFinished(phil) {
    alert('Finished my homework');
    console.log(phil);
}
function notFinished() {
    alert('Not finished my homework');
}
// doHomework('js', alertFinished);

// Immediately Invoked Function Expression (IIFE)
// IIFEs are JS functions that run as soon as it if defined.
/*
    (function() {
        statements
    })();
*/

(function () {
    console.log('My name is Jeff');
})();


// Arrays
// - Used to store multiple values in a single variable

var cars = ['Volvo', 5, 'BMW'];
console.log(cars[0]);
console.log(cars[1]);

console.log('cars size: ' + cars.length);

// Loops

// For loop
for (var i = 0; i < 3; i++) {
    console.log("car: " + cars[i]);
}

// While loop

var i = 0;
while (i < cars.length) {
    console.log("car: " + cars[i]);
    i++;
}
