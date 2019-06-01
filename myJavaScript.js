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


// Document Object Model (DOM) Manipulation
function myExternalFunction() {
    var element = document.getElementById("demo");
    element.innerText = "Paragraph changed from myScript.js!";
}


function changeParagraphBackground() {
    var elements = document.getElementsByClassName("paragraphs");
    for (var i = 0; i < elements.length; i++) {
        elements[i].setAttribute("style", "background-color:blue;");
        // elements[i].setAttribute("style", "font-size:50px;");
        var style = elements[i].getAttribute("style");
        style += "font-size:50px;";
        elements[i].setAttribute("style", style);
    }
}

function removeSecondP() {
    var elements = document.getElementsByClassName("paragraphs");
    for (var i = 0; i < elements.length; i++) {
        var element;
        if (i === 1) {
            element = elements[i];
            element.remove();
        }
    }
}

function changeFirstName() {
    var element = document.getElementById("fname");
    element.value = element.value.toUpperCase();
}











// var counter = (function() {
//     var privateCounter = 0;
//     function changeBy(val) {
//       privateCounter += val;
//     }
//     return {
//       increment: function() {
//         changeBy(1);
//       },
//       decrement: function() {
//         changeBy(-1);
//       },
//       value: function() {
//         return privateCounter;
//       }
//     };
//   })();
  
//   console.log(counter.value()); // logs 0
//   counter.increment();
//   counter.increment();
//   console.log(counter.value()); // logs 2
//   counter.decrement();
//   console.log(counter.value()); // logs 1
