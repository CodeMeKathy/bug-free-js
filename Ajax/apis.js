//! APIs

//* Refactored Best Approach

const baseEndpoint = 'https://api.github.com'
const usersEndpoint = `${baseEndpoint}/users`
const userEl = document.querySelector('.user')

async function displayUsername(username) {
  userEl.textContent = 'GitHub Data Loading ... Thank you for your patience'

  const response = await fetch(`${usersEndpoint}/${username}`)
  const data = await response.json()
  console.log(data)
  console.log(data.name)
  console.log(data.blog)
  console.log(data.location)
  userEl.textContent = `${data.name} - ${data.blog}`
}

// //* Best Approach - Using an Async Function
// // Defined Variables
// // Define a variable also commonly known as the API endpoint which is the url you need to visit to access the data provided by API
// const endpoint = 'https://api.github.com/users/codemekathy'
// // Select the element with a `user` class within the body
// const userEl = document.querySelector('.user')

// // In doing so the initial promise statement is no longer a `promise` but a response using an await fetch method
// async function displayUsername(username) {
//   // Display `loading` within the User Element until data us fetched from the API
//   userEl.textContent = `Data loading, thank you for your patience...`
//   // Define a response variable
//   const response = await fetch(endpoint)
//   // Define data variable that transposes the received data into a JSON object
//   const data = await response.json()
//   console.log(data)
//   console.log(data.blog)
//   console.log(data.name)
//   console.log(data.location)
//   // Append data from the API to the user element
//   userEl.textContent = `${data.name} - ${data.blog}`
// }

// Handle Error Function
function handleError(err) {
  console.log('Oh No!')
  console.log(err)
  userEl.textContent = `Oh no, something went wrong: ${err}`
}

displayUsername('CodeMeKathy').catch(handleError)

// //*  Using Traditional Promises

// // Display `loading` within the User Element until data us fetched from the API
// userEl.textContent = `Data loading, thank you for your patience...`

// // Define the first promise to make initial data request
// const kathyPromise = fetch(endpoint)
// console.log(kathyPromise)

// // Second promise takes the data response and transposes it to a JSON object
// kathyPromise
//   .then(response => {
//     return response.json()
//     console.log(response)
//   })
//   .then(data => {
//     console.log(data)
//     console.log(data.blog)
//     console.log(data.name)
//     console.log(data.location)
//     // Append data from the API to the user element
//     userEl.textContent = `${data.name} - ${data.blog}`
//   })
//   .catch(handleError)
