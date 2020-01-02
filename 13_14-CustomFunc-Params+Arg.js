//! Custom Functions

// console.log('it works') // Confirmation JS is running

// Functions are created or defined and later called. When initially defined that is the function definition and later when the function is executed it calling or running it.

// //* Function Definition
// function calculateBill() {
//   // Function Body
//   console.log('Running Calculate Bill!')
//   const total = 100 * 1.13 // Hard coded variables is not helpful and should be converted to include variables allow for later dynamic use
//   console.log(total)
//   return total
// }

// //* Function Call or Function Run or Invoke
// calculateBill()
// // undefined is returned after the function runs.
// const myTotal = calculateBill()

// //* Using String Temptation to access the calculateBill() function
// console.log(`Your Total is $${myTotal}`)

// // Same output as above, this time using the function directly within the string temptation.  This is because the calculateBill() returns a value.  Without a return value this approach does not work.
// console.log(`Your Total is $${calculateBill()}`)

// //* Global Variable Alternative

// // Globally Defined Variables.  However it is not *great* for a function to have to reach outside of itself to a higher  scope to access variables.
// // It is always best to pass in the data that is needed within a function rather than to declaring the data through variables on a global level.
// const bill = 100
// const taxRate = 0.13

// function calculateBillDryEx() {
//   const total = bill * 1 + taxRate
//   console.log(total)
//   return total
// }

// const myTotal2 = calculateBillDryEx()
// console.log(`Your Total is $${myTotal2}`)

// //* Parameter Alternative

// function calculateBillParams(billAmount, taxRate) {
//   const total = billAmount * (1 + taxRate)
//   return total
// }

// const myTotal3 = calculateBillParams(112, 0.08)
// const myTotal4 = calculateBillParams(12, 0.08)
// console.log(myTotal3)
// console.log(myTotal4)

// //* Parameter Overwrite
// // Once the function is created with parameters those parameters can be replaced with newly created variables and those used within the original function.
// const katTotal = 200
// const katRate = 0.08

// const myTotal5 = calculateBillParams(katTotal, katRate)
// console.log(myTotal5)

//* Functions passing through Expressions

// const bobTotal = 200

// const myTotal6 = calculateBillParams(bobTotal + 35 + 20, 0.145)
// console.log(myTotal6)

// function sayHiTo() {
//   return `Hello`
// }

// sayHiTo()
// console.log(sayHiTo())

// const greeting = sayHiTo()
// console.log(greeting)

// // *Convert sayHiTo() to pass through a parameter of `firstName`
// function sayHiToName(firstName) {
//   return `Hello ${firstName}`
// }
// sayHiToName('Kat')
// console.log(sayHiToName('Kat'))

//* Passing Functions as Arguments
// A function output is a value. So that output can be passed through another function

// function doctorize(name) {
//   return `Dr. ${name}`
// }
// console.log(doctorize('Kat'))

// function yell(name) {
//   return `HEY ${name.toUpperCase()}`
// }
// console.log(yell('Kat'))

// console.log(yell(doctorize('Kat')))

//* Default Values
// To avoid an error when executing a function that passes through a parameter, but when invoked an argument is not provided, set the param to a default value

// function yellName(name = '') {
//   return `HEY ${name.toUpperCase()}`
// }
// console.log(yellName())
// console.log(yellName('CodeMeKathy'))

//* calculateBill() Default Values Alt

function calculateBillDef(billAmount, taxRate = 0.13, tipRate = 0.15) {
  const total = billAmount + billAmount * taxRate + billAmount * tipRate
  return total
}

console.log(calculateBillDef(100))

//  Note the only way to direct a function to utilize the default when passing through some but not all arguments is to list the argument as undefined.
// Remember that when a variable is not set to anything it is undefined 
const myBill = calculateBillDef(100, undefined, 0.2)
console.log(myBill);
