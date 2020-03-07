// Define and Establish API URL

const baseEndpoint = 'http://www.recipepuppy.com/api'

// Define Pass Thru Proxy
const proxy = `https://cors-anywhere.herokuapp.com/`

// Select the Form Element from the HTML and set to a variable
const form = document.querySelector('form.search')

// Create an async function to process the data fetch request

async function fetchRecipes(query) {
  // Define and establish the response request
  const response = await fetch(`${proxy}${baseEndpoint}?q=${query}`)
  const data = await response.json()
  console.log(data)
}

// Create a function to handle the input submit

function handleSubmit(event) {
  event.preventDefault()
  console.log(event.currentTarget.query.value)
}

form.addEventListener('submit', handleSubmit)

fetchRecipes('pizza')
