// Select the card `button` elements
const cardButtons = document.querySelectorAll('.card button')
// Select the Modal Inner element
const modalInner = document.querySelector('.modal-inner')
// Select the Modal Outer element
const modalOuter = document.querySelector('.modal-outer')

// Add function to handle the card button click and assign a response action.

function handleCardButtonClick() {
  //* Display larger image
  // Identify button element
  const button = event.currentTarget
  // Similar to query selector all for the closest element but the opposite because it will traverse up the DOM tree instead of down
  const card = button.closest('.card')
  console.log(card)
  // Grab image source
  const imgSrc = card.querySelector('img').src
  // Grab the card description
  const imgDescrip = card.dataset.description
  // Grab card name
  const name = card.querySelector('h2').textContent
  // Populate the model with the data description of the element
  modalInner.innerHTML = `<img src="${imgSrc.replace(
    '200',
    '600'
  )}" alt="${name}" /> <br>
  <p>${imgDescrip}</p>
  `
  // Display Modal with newly set information
  modalOuter.classList.add('open')
}

// Loop over the selected card buttons, add event listener, and listen for a `click` on them.

cardButtons.forEach(button =>
  button.addEventListener('click', handleCardButtonClick)
)

// Close the Modal
function closeModal() {
  modalOuter.classList.remove('open')
}

// Add event listener to model outer in order to trigger the removal of the model open class and therefore close the model
modalOuter.addEventListener('click', function(event) {
  const isOutside = !event.target.closest('.modal-inner')
  if (isOutside) {
    modalOuter.classList.remove('open')
  }
})

// Allow the `esc` key to close modal
window.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeModal()
  }
})
