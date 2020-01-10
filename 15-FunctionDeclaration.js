//! Function Declaration - Ways to make or declare a function

//  Functions are first class citizens
// They are values in themselves
// When declared with the key word *function* when executed by the browser they are hosted to the top of the call stack.

//* Traditional/Original Function
// function doctorize(firstName) {
//   return `Dr. ${firstName}`
// }
// console.log(doctorize())

//* Anon (Anonymous) Function
// Functions without a name

// function (firstName) {
//   return `Dr. ${firstName}`
//  }

//* Function Expression
// Stores a function as a value in a variable

// const doctorize = function(firstName) {
//   return `Dr. ${firstName}`
// }
// console.log(doctorize('Kat'))

// //* Arrow Functions
// // Are anon functions that has to be set to a variable

// //* Traditional Function
// function inchToCM(inches) {
//   const cm = inches * 2.54
//   return cm
// }
// console.log(inchToCM(3))

// //* Restructured Dryer Traditional Function
// function inchToCM2(inches) {
//   return inches * 2.54
// }
// console.log(inchToCM2(3))

// //* Anonymous Function
// const inchToCMAnon = function(inches) {
//   return inches * 2.54
// }
// console.log(inchToCMAnon(3))

// const inchToCMArrow = inches => {
//   // Keyword `return` is an explicit return
//   return inches * 2.54
// }
// console.log(inchToCMArrow(3))

// //* An implicit return, returns a value without using the keyword `return`
// const inchToCM3 = inches => inches * 2.54
// console.log(inchToCM3(3))

// //* Traditional Function Conversion to Arrow Function

// function add(a, b = 3) {
//   const total = a + b
//   return total
// }
// console.log(add(2, 2))

// const addArrow = (a, b = 3) => a + b
// console.log(add(2))

// // * Returning an Object

// // Traditional Function Approach - most readable approach!
// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0
//   }
//   return baby
// }
// console.log(makeABaby('Kit', 'Katt'))

// // Arrow Function Approach
// const makeABaby1 = (first, last) => {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0
//   }
//   return baby
// }
// console.log(makeABaby1('Kit', 'Katt'))

// // Implicit Return Approach
// // Add the parenthesis around the object creation to tell JS engine that this is not a block of code but an implicit return of an object creation
// const makeABabyImplicit = (first, last) => ({name: `${first} ${last}`, age: 0})

// console.log(makeABabyImplicit('Kit', 'Katt'))

// IIFE - Immediately Invoked Function Expression
// The benefits of a IIFE:

// This approach is not allowed and needs to be converted to an IIFE
// function() {
//   console.log('Running the Anon Function')
//   return 'You are cool'
// }

// ;(function() {
//   console.log('Running the Anon Function')
//   return 'You are cool'
// })()
// ;(function(age) {
//   console.log('Running the Anon Function')
//   console.log(`You are cool and age ${age}`)
// })(10)

// //* Methods!!!
// // A method is a function that lives inside of an object.

// // Traditional
// const kat = {
//   name: 'Kat Lamb',
//   sayHi: function() {
//     // Browsers will infer the function name from the method it is in
//     console.log('Hey Kat')
//     return 'Hey Kat'
//   },
// // Short Hand Method Creation - Most Commonly Used
//   yellHi() {
//     console.log('Heyyyyyy Kat')
//     return 'Heyyyyyy Kat'
//   },
// // Arrow Function Approach - used if one does NOT want to access `this`
//   whisperHi: () => {
//     console.log('hiii Kat I am as quite as a mouse')
//     return 'hiii Kat I am as quite as a mouse'
//   }
// }
// console.log(kat.sayHi())
// console.log(kat.yellHi())
// console.log(kat.whisperHi())

// //* Callback Functions

// // Click Callback with already created method
// const button = document.querySelector('.clickMe')

// button.addEventListener('click', kat.yellHi)

// // Creating a function outside of the handler and pass through reference to the function

// function handleClick() {
//   console.log('Great Clicking!!')
// }
// button.addEventListener('click', handleClick)

// // Anonymous Callback Function

// button.addEventListener('click', function() {
//   console.log('Nice Job!!!')
// })

// //* Timer Callback
// // A function which is called after a specified amount of time has passed

// setTimeout(function() {
//   console.log('DONE! Time to eat!')
// }, 1000)
