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

function handleBuyButtonClick(event) {
  // The  passed parameter `event` is can be named anything from `dog` to `e`
  // console.log(event.target)
  const button = event.target
  // Most times when attempting to select the event listener that is firing use `event.currentTarget`.  It will matter most when the item being clicked has nested items within it. For example a button with a strong tag around the button contents
  console.log(event.target)
  console.log(event.currentTarget)
  console.log(event.target === event.currentTarget)
  console.log(button.textContent)
  console.log(parseFloat(event.target.dataset.price))

  // Stop propagation - this event from bubbling up and firing in addition to the other event listeners. Use the `stopPropagation`
  // event.stopPropagation()

  // console.log('You are buying it!')
}
// // Handler Functions
// function buyItem() {
//   console.log('Buying Item')
// }
// console.log(buyButtons)
// console.dir(butts)

// // Methods
// function attachEventListener(buyButton) {
//   console.log('Biding the buy button')
//   buyButton.addEventListener('click', buyItem)
// }

// // Dry Approach
// // buyButtons.forEach(attachEventListener)

// // // Traditional forEach
// // buyButtons.forEach(function(buyButton) {
// //   // console.log('Hey')
// //   // console.log(buyButton)
// //   console.log('Biding the buy button')
// //   buyButton.addEventListener('click', buyItem)
// // })

// // Arrow Function Approaches

// buyButtons.forEach(button => button.addEventListener('click', addEventListener))

// // buyButtons.forEach(button => {
// //   button.addEventListener('click', addEventListener)
// // })

// // buyButtons.forEach(button => {
// //   button.addEventListener('click', () => {
// //     console.log('You clicked it')
// //   })
// // })

//* Events - Targets, Bubbling, Propagation and Capture

// Loop over every single buy button and add an event handler to it
buyButtons.forEach(function(buyButton) {
  buyButton.addEventListener('click', handleBuyButtonClick)
})

window.addEventListener(
  'click',
  function(event) {
    console.log('You clicked the window')
    console.log(event.target)
    console.log(event.type)
    console.log(event.bubbles)
    // event.stopPropagation()
  },
  // the `capture` option changes the direction of the propagation from bottom to top
  { capture: true }
)

const photoElement = document.querySelector('.photo')

photoElement.addEventListener('mousemove', function(e) {
  console.count(e.currentTarget)
  // W.B recommends avoiding using `this` in event listener callbacks, use `.currentTarget` instead to avoid an incorrect reference
  console.log('this photoElement:', this) // This should be equal to the start line item to the left of the `.`, unless an arrow function is used

})
