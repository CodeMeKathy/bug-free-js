//! Document Object Model (DOM) Element Selection

// Select or Grab first `p` element
const p = document.querySelector('p')
console.log(p)

// Select/Grab all `div` elements
const divs = document.querySelectorAll('div')
console.log(divs)

// A node list is not an array, but it is a list of things
// A nodeList does not include many of the built in methods available to arrays.

// Select images within elements with a class name of `.item`
const itemImages = document.querySelectorAll('.item img')
console.log(itemImages)

// Select the second item class name item2's first image element

const item2 = document.querySelector('.item2')
// Using querySelector and querySelectorAll on a declared variable selecting and element will limit the scope of the query to that element
const item2Image = item2.querySelector('img')
console.log(item2)
console.log(item2Image)

//* Note: It is recommended to use querySelector and querySelectorAll as they were introduced after getElementById and allow for more flexibility
