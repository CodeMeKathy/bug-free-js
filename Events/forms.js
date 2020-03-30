//! Forms

// Select and assign to a variable the link with class `kathy`
const kathy = document.querySelector('.kathy')

// Add an event listener to the newly assigned variable
kathy.addEventListener('click', function (event) {
  // event.preventDefault()
  // const shouldChangePage = confirm(
  //   'Are you sure you are ready to leave?'
  // )
  // if (shouldChangePage){
  //   window.location = event.currentTarget.href
  // }
  // Alternative Using `preventDefault` solely
  const shouldChangePage = confirm(
  'Are you sure you are ready to leave?'
  )
  if(!shouldChangePage) {
    event.preventDefault()
  }
})

const signupForm = document.querySelector('[name="signup"]')

signupForm.addEventListener('submit', function (event) {
  // console.log(event)
  console.dir(signupForm) // Aids in visually seeing all available nodes
  // console.log(event.currentTarget.name.value)
  // console.log(event.currentTarget.email.value)
  // console.log(event.currentTarget.agree.checked)
  const name = event.currentTarget.name.value
  if(name.includes('chad')) { //* Note includes method is not case sensitive
    alert('Sorry bro...no chads allowed')
    event.preventDefault()
  }
})

//  Most Common Event Types with Form Inputs

'keyup'
'keydown'
'focus'
'blur'

console.log(signupForm.name);

// Create a function to log all key events

function logEvent(event) {
  console.log(event.type)
  console.log(event.currentTarget.value)
}

signupForm.name.addEventListener('keyup', logEvent)
signupForm.name.addEventListener('keydown', logEvent)
signupForm.name.addEventListener('focus', logEvent)
signupForm.name.addEventListener('blur', logEvent)

//* Accessibility

// Buttons are for call to actions or to trigger an action
// Links are used to change the page
  // Note `preventDefault` is not traditionally used with links, but it is ok to use to prevent unauthorized action on a link, e.g. A link which requires logged in access.  

  // Select the image element
  const accPhoto = document.querySelector('.photo')

  // Create a `handlePhotoClick` function that returns via the console 'You have clicked the button' if the element is clicked with the mouse or if enter is pressed when the photo is selected

  function handlePhotoClick(event) {
    if (event.type === 'click' || event.key === 'Enter' ) {
      console.log('You have clicked the button')
    }
  }
  

  // Run both use cases
  accPhoto.addEventListener('click', handlePhotoClick)
  accPhoto.addEventListener('keyup', handlePhotoClick)


