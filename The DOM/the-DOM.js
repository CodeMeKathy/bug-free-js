//! Document Object Model (DOM)

// //* Element Selection

// // Select or Grab first `p` element
// const p = document.querySelector('p')
// console.log(p)

// // Select/Grab all `div` elements
// const divs = document.querySelectorAll('div')
// console.log(divs)

// // A node list is not an array, but it is a list of things
// // A nodeList does not include many of the built in methods available to arrays.

// // Select images within elements with a class name of `.item`
// const itemImages = document.querySelectorAll('.item img')
// console.log(itemImages)

// // Select the second item class name item2's first image element

// const item2 = document.querySelector('.item2')
// // Using querySelector and querySelectorAll on a declared variable selecting and element will limit the scope of the query to that element
// const item2Image = item2.querySelector('img')
// console.log(item2)
// console.log(item2Image)

// //* Note: It is recommended to use querySelector and querySelectorAll as they were introduced after getElementById and allow for more flexibility

//* Element Properties and Methods

// const p = document.querySelector('p')
// const imgs = document.querySelectorAll('.item img')
// const item2 = document.querySelector('.item2')
// const item2Image = item2.querySelector('img')
const heading = document.querySelector('h2 ')
// console.log(item2)
// console.log(heading)
// console.dir(heading) // `.dir` returns a list of available properties accessible to that element
// // console.dir(heading.textContent) // $ Sub Div Heading

// //* DOM elements can than be reset using properties available
// console.log(heading.textContent)
// heading.textContent = 'Kat is kool'
// console.log(heading.textContent)

// //* Note `Node.textContent` has access to all the elements, including script and style elements.  As opposed to `HTMLElement.innerText` where only human-readable elements are accessible
// console.log(heading.textContent)
// console.log(heading.innerText) // InnerText is aware of CSS styling

// //* Set of Properties for working with HTML

// console.log(`Inner Heading: ${heading.innerHTML}`)
// console.log(`Outer Heading: ${heading.outerHTML}`)

// //* Adding to DOM HTML text
// const pizzaList = document.querySelector('.pizza')
// console.log(pizzaList)

// //* Inefficient/ Slow Way
// // pizzaList.textContent = `${pizzaList.textContent} 🍕` // This solution causes the browser to re-render the entire list each time

// // Alternatively adding text onto the beginning or end using the methods: `insertAdjacentText`, `insertAdjacentHTML`, or `insertAdjacentElement`
// // Right Way:
// pizzaList.insertAdjacentText('afterbegin', '🍕')
// pizzaList.insertAdjacentText('beforeend', '🍕')

//* Working with Classes
// There are built-in methods to allow for the adding and removing of class attributes

const pic = document.querySelector('.nice')
// console.log(pic.classList)

// // A ClassList is similar to an array of the classes on an element
// // The _proto_ list provides a list of methods that can be used on that element
// pic.classList.add('open')
// pic.classList.remove('cool')
// console.log(pic.classList)
// // pic.classList.toggle('round')
// console.log(pic.classList)

// // Create a function to add an event listener on click that toggles the class round on the first image
// function toggleRound() {
//   pic.classList.toggle('round')
// }

// pic.addEventListener('click', toggleRound)
// console.log(pic.classList)

// // Use the property `.className` to return a list of class names
// console.log(`Variable pic list of classes: ${pic.className}`)

// //* HTML Element Data Attributes - Anything provided to an element as additional information
// // Things like classes atl, and src

// // Setters & Getters
// pic.alt = 'Cute Pup' // Setter
// console.log(pic.alt) // Getter
// console.log(pic.naturalWidth) // Getter

// // Best Use Case: Add Event Listener to the `pic` element
// pic.addEventListener('load', function() {
//   console.log(pic.naturalWidth) // Getter
// })

// // Add Event Listener to the `window`
// window.addEventListener('load', function() {
//   console.log(pic.naturalWidth) // Getter
// })

// To set element width

// pic.width = 200

// // Set Attribute
// pic.setAttribute('alt', 'Really Cute Puppy')

// // Get Attribute
// console.log(pic.getAttribute('alt'))

// // Boolean is Attribute Present

// // Custom Attributes are called Data Attributes

// // To create a data attribute use the prefix `data-` followed by an assigned word for example `data-name`

// const custom = document.querySelector('.nice')
// console.log(custom.dataset)

// custom.addEventListener('click', function() {
//   alert(`Welcome ${custom.dataset.name} ${custom.dataset.last}`)
// })
