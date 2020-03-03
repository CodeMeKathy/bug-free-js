//! Debugging

const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' }
]

// people.forEach((person, index) => {
//   if (person.name === 'Wes') console.log(person.name)
// })

// //* Console Methods
// console.table(people)
// console.count('running Doctorize')

// // console.group()
// function doALotOfStuff() {
//   console.group('Doing some stuff')
//   console.log("Hey I'm one")
//   console.warn('watch out')
//   console.error('hey')
//   console.groupEnd('Doing Some Stuff')
// }
// doALotOfStuff() // Gotta Make the Baby!!

// people.forEach((person, index) => {
//   console.groupCollapsed(`${person.name}`)
//   console.log(person.country)
//   console.log(person.cool)
//   console.log('DONE')
//   console.groupEnd(`${person.name}`)
// })

//* Callstack or Stack Trace

function doctorize(name) {
  return `Dr. ${name}`
}

function greet(name) {
  doesntExist()
  return `Hello ${name}`
}

function go() {
  const name = doctorize(greet('Wes'))
  console.log(name)
}

function bootstrap() {
  console.log('Starting the App!')
  go()
}

// bootstrap()

//* Grabbing Elements

// In the browser Console once an element is selected it can be accessed through `$0` which is the last selected element.  Previously selected elements can be accessed by increasing the `#`, for example the second selected element can be accessed via `$1`.
// The value can be accessed via $0.value

// Selector Short-hand
// $ and $$
// $('button') selects indicated first encountered element // first button on page
// $$('button') selects all indicated elements // all buttons on the page

// //* Breakpoints
// people.forEach((person, index) => {
//   debugger
//   console.log(person.name)
// })

//* Scope
// Allows one to peer into the accessibility of variables

//* Network Requests

// Break On Attribute

// Some Setup Code

const button = document.querySelector('.bigger')
button.addEventListener('click', function(e) {
  const newFontSize = parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1
  e.currentTarget.style.fontSize = `${newFontSize}px`
})

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain'
    }
  })
  const joke = await res.text()
  console.log(joke)
  return joke
}
