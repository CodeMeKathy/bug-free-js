// Define and Establish API URL
const baseEndpoint = 'http://www.recipepuppy.com/api'

// Define Pass Thru Proxy to surpass CORS policy
const proxy = `https://cors-anywhere.herokuapp.com/`

// Select the Form Element from the HTML and set to a variable
const form = document.querySelector('form.search')

// Create a Grid within the `div` with the class name of `recipe`
const recipesGridElement = document.querySelector('.recipes')

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
}

// Create a new function to load and display the recipe data
async function fetchAndDisplay(query) {
  // Set form to off
  form.submit.disabled = true
  // Submit the search query
  const recipes = await fetchRecipes(query)
  console.log(recipes)

  // Reset the submit button disabled status
  form.submit.disabled = false

  // Run the displayRecipe Function
  displayRecipes(recipes.results)
}

// Create a function to display the recipe to the DOM
function displayRecipes(recipes) {
  // console.log('Creating HTML')
  // console.log(recipes)
  const htmlDiv = recipes.map(
    recipe => `<div class='recipe'>
    <h2>${recipe.title}</h2>
    <h5>${recipe.ingredients}</h5>
    ${recipe.thumbnail &&
      `<img src='${recipe.thumbnail}' alt='${recipe.title}' />`}
    <a href='${recipe.href}'>View Recipe →</a> 
    </div>`
  )
  // console.log(html)
  recipesGridElement.innerHTML = htmlDiv.join('')
}

form.addEventListener('submit', handleSubmit)
// On page load run it with pizza
fetchAndDisplay('pizza')
