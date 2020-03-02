//! DOM Cardio Exercises

//* Make a div
let newDiv = document.createElement('div')

//* add a class of wrapper to it
newDiv.classList.add('wrapper')
console.log(newDiv.classList)

//* put it into the body
// document.body.onload = addElement
document.body.appendChild(newDiv)

//* make an unordered list
// WB Way
const ul = `<ul>
  <li>one</li>
  <li>two</li>
  <li>three</li>
</ul>`

// My way
let unList = document.createElement('ul')

//* add three list items with the words "one, two three" in them
let listItem1 = document.createElement('li')
let listItem2 = document.createElement('li')
let listItem3 = document.createElement('li')
unList.appendChild(listItem1)
unList.appendChild(listItem2)
unList.appendChild(listItem3)

let item1 = document.createTextNode('one')
let item2 = document.createTextNode('two')
let item3 = document.createTextNode('three')
listItem1.appendChild(item1)
listItem2.appendChild(item2)
listItem3.appendChild(item3)

//* put that list into the above wrapper

// WB Way
// div.innerHTML = ul

// My Way
newDiv.appendChild(unList)

//* create an image
let newImage = document.createElement('img')

//* set the source to an image
newImage.src = 'https://picsum.photos/500?random'

//* set the width to 250
newImage.width = '250'
newImage.height = '250'

//* add a class of cute
newImage.classList.add('cute')

//* add an alt of Cute Puppy
newImage.alt = 'Cute Puppy'

//* Append that image to the wrapper
newDiv.appendChild(newImage)

//* with HTML string, make a div, with two paragraphs inside of it
const string = `
  <div class='stringDiv' >
    <p>Paragraph #1</p>
    <p>Paragraph #2</p>
  </div>
`
// Alternative Method
// Create an Range
// Create Document Fragment

//* put this div before the unordered list from above
const ulElement = newDiv.querySelector('ul')
console.log(ulElement)
// document.body.insertBefore(stringFrag, ulElement)
ulElement.insertAdjacentHTML('beforebegin', string)
console.log(typeof string)

//* add a class to the second paragraph called warning

const stringDiv = newDiv.querySelector('.stringDiv')
// Alternative that is FLAWED bc it is dependent on no other elements being added to the DOM related to the `newDiv` element
// const stringDiv = newDiv.firstElementChild
// console.log(stringDiv)

console.log(stringDiv)
stringDiv.children[1].classList.add('warning')

//* remove the first paragraph

stringDiv.firstElementChild.remove()

// * create a function called generatePlayerCard that takes in three arguments: name, age, and height and have that function return html that looks like this:

// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AgeInDogYears. That would be a tall dog!</p>
// </div>

function generatePlayerCard(name, age, height) {
  const newHTML = `
  <div class="playerCard">
  <h2>${name} - ${age}</h2>
  <p> Their height is ${height} inches and ${age} years old.  In Dog years this person would be ${age *
    7} Dog years old.  That would be a tall dog!</p>

    <button class="delete" type="button">&times; Delete</button>
  </div>
  `
  return newHTML
}
generatePlayerCard()
console.log(generatePlayerCard('sammy', 13, 54))

// document.body.appendChild('playerCard')
// document.body.appendChild(p)

//* make a new div with a class of cards
const cardDiv = document.createElement('div')
cardDiv.classList.add('cards')

//* Have that function make 4 cards
let cardHTML = generatePlayerCard('player1', 15, 44)
cardHTML += generatePlayerCard('player2', 35, 40)
cardHTML += generatePlayerCard('player3', 22, 34)
cardHTML += generatePlayerCard('player4', 66, 64)

//* append those cards to the div
cardDiv.innerHTML = cardHTML

//* put the div into the DOM just before the wrapper element
newDiv.insertAdjacentElement('beforebegin', cardDiv)

//* Bonus, put a delete Button on each card so when you click it, the whole card is removed
// <button className="delete" type="button">&times; Delete</button>

//* select all the buttons!

const buttons = document.querySelectorAll('.delete')
console.log(buttons)

//* make out delete function

function deleteCard() {
  // identify the button clicked
  const clickedButton = event.currentTarget
  // Remove the parent element of the event target
  clickedButton.parentElement.remove()
  // console.log('Delete Card!')
  // Use the closest method to walk up the DOM tree to find the element for removal
  clickedButton.closest('.playerCard').remove()
}

//* loop over them and attach a listener
buttons.forEach(button => button.addEventListener('click', deleteCard))
