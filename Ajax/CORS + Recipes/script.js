// Define and Establish API URL
const baseEndpoint = 'http://www.recipepuppy.com/api'

// Define Pass Thru Proxy to surpass CORS policy
const proxy = `https://cors-anywhere.herokuapp.com/`

// Select the Form Element from the HTML and set to a variable
const form = document.querySelector('form.search')

// Create an async function to process the data fetch request

async function fetchRecipes(query) {
  // Define and establish the response request
  const response = await fetch(`${proxy}${baseEndpoint}?q=${query}`)
  const data = await response.json()
  // console.log(data)
  return data
}

// Create a function to handle the input submit

async function handleSubmit(event) {
  event.preventDefault()
  // Select the event target which is the form input element
  const formInputElement = event.currentTarget
  console.log(formInputElement.query.value)
  // Set form to off
  formInputElement.submit.disabled = true
  // Submit the search query
  const recipes = await fetchRecipes(formInputElement.query.value)
  console.log(recipes)

  // Reset the submit button disabled status
  formInputElement.submit.disabled = false

  // Run the displayRecipe Function
  displayRecipes(recipes.results)
}

// Create a function to display the recipe to the DOM
function displayRecipes(recipes) {
  console.log('Creating HTML')
  console.log(recipes)
  const htmlDiv = recipes.map(recipe => {
    return `<div>
      <h2>${recipes.title}</h2>
      <h5>${recipes.ingredients}</h5>
      ${recipe.thumbnail &&
        `<img src='${recipe.thumbnail}' alt='${recipe.title}' />`}
    </div>`
  })
  console.log(html)
}

form.addEventListener('submit', handleSubmit)

fetchRecipes('pizza')
