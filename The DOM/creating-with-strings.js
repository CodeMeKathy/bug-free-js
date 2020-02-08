const item = document.querySelector('.item')

// item.innerHTML = `
// <h1>Hey; How are you?!?</h1>
// `
const width = 300
const src = `https://picsum.photos/${width}`
const desc = `Cute Doggy`

// Security Caveat Example
// const desc = `Cute Pup <img onload="alert('HACKED')" src="https://picsum.photos/50" />`
const myHTML = `
  <div class='wrapper' >
    <h1>What up ${desc}?!</h1>
    <p>What up paragraph tag?!</p>
    <img src='${src}' alt="${desc}"/>
  </div>
`

item.innerHTML = myHTML
console.log(item.innerHTML)

// Using String Templates creates a string not a DOM element thus dynamic events cannot be added to strings
// Transform String to DOM Element

const myFragment = document.createRange().createContextualFragment(myHTML)

document.body.appendChild(myFragment)
console.log(typeof myFragment)

//* Note: Security Caveat

// When using string templation there is the possibility that users can insert html elements and style tags which then are pulled into the application unknowingly

// Cross-site scripting
// Adding script tags into input fields which can be used to run unwanted scripts and gain access to anything
