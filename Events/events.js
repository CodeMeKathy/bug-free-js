//! JavaScript Events

// Select the button by class
const butts = document.querySelector('.butts')
const cool = document.querySelector('.cool')
console.log(butts)

// Create a function to handle the event listener
function handleClick() {
  console.log('It got clicked')
}

// butts.addEventListener('click', function() {
//   // Add action once clicked or define action within the callback function
// })

// More Efficient Way
butts.addEventListener('click', handleClick)
cool.addEventListener('click', handleClick)

butts.removeEventListener('click', handleClick)

//* Multiple Item Event Listening
const buyButtons = document.querySelectorAll('button.buy')

// Handler Functions
function buyItem() {
  console.log('Buying Item')
}
console.log(buyButtons)
console.dir(butts)

// Methods
function attachEventListener(buyButton) {
  console.log('Biding the buy button')
  buyButton.addEventListener('click', buyItem)
}

// Dry Approach
// buyButtons.forEach(attachEventListener)

// // Traditional forEach
// buyButtons.forEach(function(buyButton) {
//   // console.log('Hey')
//   // console.log(buyButton)
//   console.log('Biding the buy button')
//   buyButton.addEventListener('click', buyItem)
// })

// Arrow Function Approaches

buyButtons.forEach(button => button.addEventListener('click', addEventListener))

// buyButtons.forEach(button => {
//   button.addEventListener('click', addEventListener)
// })

// buyButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     console.log('You clicked it')
//   })
// })
