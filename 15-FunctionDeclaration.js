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

//* Arrow Functions
// Are anon functions that has to be set to a variable

//* Traditional Function
function inchToCM(inches) {
  const cm = inches * 2.54
  return cm
}
console.log(inchToCM(3))

//* Restructured Dryer Traditional Function
function inchToCM2(inches) {
  return inches * 2.54
}
console.log(inchToCM2(3))

//* Anonymous Function
const inchToCMAnon = function(inches) {
  return inches * 2.54
}
console.log(inchToCMAnon(3))

const inchToCMArrow = inches => {
  // Keyword `return` is an explicit return
  return inches * 2.54
}
console.log(inchToCMArrow(3))

//* An implicit return, returns a value without using the keyword `return`
const inchToCM3 = inches => inches * 2.54
console.log(inchToCM3(3))

//* Traditional Function Conversion to Arrow Function

function add(a, b = 3) {
  const total = a + b
  return total
}
console.log(add(2, 2))

const addArrow = (a, b = 3) => a + b
console.log(add(2))
