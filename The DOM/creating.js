//! Creating HTML Elements with JavaScript

//* Use JS to create a `p` element
const paragraph = document.createElement('p')

//* Add text to the `p` element

// WB Way
paragraph.textContent = `Better way!`

// My Way
const paraText = document.createTextNode(`Paragraph Text`)
paragraph.appendChild(paraText)

//* Add a class of `special` to the `p` element
paragraph.classList.add('special')

//* Create an Image
const image = document.createElement('img')

//* Add a `src` attribute to the created image
// WB Way:
const myImage = document.createElement('img')
myImage.src = 'https://picsum.photos/300'
myImage.alt = 'WB Random Imgae'

// My Way
image.setAttribute('src', 'https://picsum.photos/200')

//* Add an `alt` attribute to the created image
image.setAttribute('alt', 'Random Image')

//* Create a `div` element
const div = document.createElement('div')

//* Add a class of `wrapper` to the `div` element
div.classList.add('wrapper')

//* Add the `div`, `p` and `image` elements to the body element

// WB/ Best Way

// Write in reverse order and limit the number of direct modifications to the document body

div.appendChild(paragraph)
div.appendChild(image)

document.body.appendChild(div)

// // My Way
// document.body.appendChild(paragraph)
// document.body.appendChild(image)
// document.body.appendChild(myImage)
// document.body.appendChild(div)

//* Create and Add Heading to Top of the body

const heading = document.createElement('h2')
heading.textContent = 'Heading'
div.insertAdjacentElement('beforebegin', heading)

//* Create an unordered List with 5 items and append to the the DOM entirely using the API Element methods

// Create `ul` and `li` elements
const ul = document.createElement('ul')
const li1 = document.createElement('li')
const li2 = document.createElement('li')
const li3 = document.createElement('li')
const li4 = document.createElement('li')
const li5 = document.createElement('li')

// Add Text to each `li` element
li1.textContent = 'One'
li2.textContent = 'Two'
li3.textContent = 'Three'
li4.textContent = 'Four'
li5.textContent = 'Five'

// Append all elements to the DOM
ul.appendChild(li1)
ul.appendChild(li2)
li2.insertAdjacentElement('beforeend', li3)
li3.insertAdjacentElement('afterend', li4)

div.insertAdjacentElement('beforeend', ul)
