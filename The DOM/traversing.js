//! Traversing the Dom (Document Object Model)

// Select the `p` element

const kathy = document.querySelector('.kathy')
console.log(kathy)

// .closest allows for searching the DOM upwards

// Searches the DOM downwards to search for cited class element. Note ignores plain text nodes
console.log(kathy.children)
console.log(kathy.firstElementChild)
console.log(kathy.lastElementChild)
console.log(kathy.previousElementSibling)
console.log(kathy.nextElementSibling)
console.log(kathy.parentElement)

// Used to Search down the DOM for Node item(s) connected to the cited class element.  Note will include text nodes and are not ignored

console.log(kathy.childNodes)
console.log(kathy.firstChild)
console.log(kathy.lastChild)
console.log(kathy.previousSibling)
console.log(kathy.nextSibling)
console.log(kathy.parentNode)

// Remove Method
const items = document.querySelector('.items')
console.log(kathy.parentElement.children) // 8 Elements

items.remove() // Will remove the item from the rendered DOM
console.log(kathy.parentElement.children) // 7 Elements

// Note: Even after being removed the JavaScript Memory remembers the element and it still accessible

console.log(items)

document.body.appendChild(p)
