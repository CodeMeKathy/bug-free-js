//! Hoisting

// Allows on to access functions and variable before they have been created.
// Function and Variable Declarations can be hoisted.

//* Function Hoisting.

// The JS compiler takes all of your function and variable declarations and move them to the top of the file. So technically one can run a function before it has been created.

//  However, for better code organization, it is recommended that functions and variables are declared before they are called or executed. For larger applications, storing all functions within a separated module called `utilityFunctions` and import into the file in which the functions are called  is even suggested.

//* Variable Hosting

// The Js engine hoists a declared variable but not the set or assigned value.

console.log(age) // $ undefined
var age = 10

// The above code snippet complies to ...
var age
console.log(age) // $ undefined
age = 10

//* Note: Hoisting only works with traditional functions, it will not work with arrow functions or functions set to variable.
