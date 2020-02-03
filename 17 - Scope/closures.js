//! Closures

// // Closure is the ability to access the parent level scope from a child level scope even after the parent level function has been terminated

// //* Basic Closure Example
// // Make a function inside a function called inner and outer

// function outer() {
//   const outerVar = 'Hey I am the outer Var!'
//   function inner() {
//     const innerVar = 'Hey I am the inner Var!'
//     console.log(innerVar)
//     console.log(outerVar)
//   }
//   return inner
// }

// const innerFunc = outer()
// innerFunc()

// //* Using Closure to Create Private Variables
// // `myGreet` is the variable within the parent level scope that is continued to be accessed long after the createGreeting function is terminated or closed over
// // functions inside of functions that are still able to access the closure data withing the it

// function createGreeting(greeting = '') {
//   const myGreet = greeting.toUpperCase()
//   return function(name) {
//     return `${myGreet} ${name}`
//   }
// }

// const sayHello = createGreeting('hello')
// const sayHey = createGreeting('hey')
// console.log(sayHello('kat'))
// console.log(sayHello('Billy'))
// console.log(sayHey('Jean-Luc!'))

//* Second Example
// Create Game - Keep Score

function createGame(gameName) {
  let score = 0
  // `score` is the private variable
  return function win() {
    score++
    return `Your ${gameName} score is ${score}`
  }
}

const checkersGame = createGame('Checkers')
console.log(checkersGame())
console.log(checkersGame())
console.log(checkersGame())
console.log(checkersGame())

const footballGame = createGame('Football')
console.log(footballGame())
