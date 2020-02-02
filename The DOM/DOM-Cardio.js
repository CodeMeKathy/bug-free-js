// console.log('It works!')

//* Make a div
let newDiv = document.createElement('div')

//* add a class of wrapper to it
newDiv.classList.add('wrapper')
console.log(newDiv.classList)

//* put it into the body
// document.body.onload = addElement
document.body.appendChild(newDiv)

//* make an unordered list
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
newDiv.appendChild(unList)

//* create an image
let newImage = document.createElement('img')

//* set the source to an image
newImage.src = 'https://picsum.photos/200?random'

//* set the width to 250
newImage.width = '250'

//* add a class of cute
newImage.classList.add('cute')

//* add an alt of Cute Puppy
newImage.alt = 'Cute Puppy'

//* Append that image to the wrapper
newDiv.appendChild(newImage)

//* with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above

//* add a class to the second paragraph called warning
//* remove the first paragraph

//* create a function called generatePlayerCard that takes in three arguments: name, age, and height

//* have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

//* make a new div with a class of cards

//* Have that function make 4 cards

//* append those cards to the div
//* put the div into the DOM just before the wrapper element
//* Bonus, put a delete Button on each card so when you click it, the whole card is removed

//* select all the buttons!
//* make out delete function
//* loop over them and attach a listener
