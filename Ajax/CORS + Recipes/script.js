// Define and Establish API URL

const baseEndpoint = 'https://www.recipepuppy.com/api'

// Create an async function to process the data fetch request

async function fetchRecipes(query) {
  // Define and establish the response request
  const response = await fetch(`${baseEndpoint}?q=${query}`)
  const data = await response.json()
}
fetchRecipes('pizza')
