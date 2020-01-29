//! Scope

// //* Global Scope

// const first = 'kat' // Can be accessed via anywhere
// let second = 'lake'
// var age = 100

// A global built in object in the browser which has global access is `window`. - With the exception of const and let, declared variables; global variables are automatically attached to the window object.

// A Shadow Variable is one that shares the same name as a variable in a different scope block. A variable is `shadowed` when it is overwritten which is legal but is not allowed. In doing so you limit your ability to access the shadowed variole which is not wanted. Instead simply create a better-named variable to use.

//* Block Scope

// Curly brackets `{}` establish, automatically, a new block of scope.  They are like gates which keep variables within the gates.  If accessing a variable within a block code, declare the variable outside of the function and update the value of the variable within the function body

// // The Right Way!
// let cool // Declaration outside of if statement
// if (1 === 1) {
//   cool = true
// }
// console.log(cool)

//  The BEST WAY!

function isCool(name) {
  let cool
  if (name === 'kat') {
    cool = true
  } else {
    return false
  }
  console.log(cool)
  return cool
}

// // The WRONG Way!
// if (1 === 1) {
//   let cool = true
// }
// console.log(cool) // $ undefined

//* Lexical or Static Scope (@ 17mins 36secs)

// Variable or Scope look-up occurs at the point the variables are defined not at the point in which they are executed. Which allows a function to look up to the parent or global scope for variable values.
// In a nested group of functions the inner functions have access to variables and the other resources of the parent scope.

//* Functional Scope

// Functions have the same scope as variables.

// Variables declared or created within a function are only accessible within that function and are bound by functional scope. Unless explicitly returned and assigned to a variable

// The use of `var` declared variables can result in variable leakage throughout the application

function sayHi(name) {
  function yell() {
    console.log(name.toUpperCase())
  }
  yell()
}

yell() // $ function undefined - ReferenceError

// The yell() function is scope to the parent sayHi() and therefore not accessible outside of the sayHi().

//* Variable Declaration Recommendation

// - Use `const` by default
// - Use `let` when you need to reassign the value of the variable. `let` has block scope.
// - Do not use `var` unless there is a specific use case. `var` has function NOT block scope and can be accessed only within the function, but not exclusively to the block of code it is declared within.

// Variable and or Scope leakage

for (var i = 0; i > 10; i++) {
  console.log(i)
}

// Leakage Avoidance

for (let i = 0; i > 10; i++) {
  console.log(i)
}

// const dog = 'snickers'

// function logDog() {
//   console.log(dog)
// }

// function go() {
//   const dog = 'sunny'
//   logDog()
// }

// go()
