/*

    var 
    It is 


    function scope
        - Available with in the function it is declared


*/
var hey = "hey";
function newFunction(){
    var hello = "hello";
}

/*
    Hoisting is a Js mechanism where variables and function
    declarations are moved to the top of their scope 
 */

 // There exist a prolem with vars

var greeterTwo = 'hey hi';
var time = 4;

if (time > 3) {
    var greeterTwo = 'say hello instead';
}

console.log(greeterTwo);
// output is 'say hello instead'

// let is for variable declaration and is blocked scope
// let can be updated but not re-declared like var 
if (true) {
    let helloTwo = 'say hello';
    console.log(helloTwo);
}
// console.log(helloTwo); error

// this will work
let greeterThree = 'hey 1';
greeterThree = 'hi hey';

//let greeterThree = 'hello'; error

// however if some variable is defined in defrent scopes,
// there will be no error.

let greeterFive = 'hello';
if (true) {
    let greeterFive = 'hi';
    console.log(greeterFive);
}

console.log(greeterFive);
/* why no error?
Both instances are treated as diffeent variables since they have different scopes.

when using let, you don't have to bother if you have used a name for variable before, as a variable exists only within 
ascope.
*/

/* Hoisting for let

Just like var, let declarations are hoisted to the top.
unlike var we can't use a let variable before we initialize it
*/

console.log(letGreeter);
let letGreeter = 'hello';

/*
    const

    variables declared with const maintain constant values.
    const variables 
*/

const constGreeting = 'hey';

// every const primitive declaration therefore must be initialized at the time of declaration.
// this behavior is somehow different when it comes to object declaration with const.

const flow = {
    message  : 'hi',
    times : 4,
}
//can't do this
flow.message = 'hello instead';
