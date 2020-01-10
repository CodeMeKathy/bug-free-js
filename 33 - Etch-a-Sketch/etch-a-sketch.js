// Select the elements on the page - canvas, shake button

const canvas = document.querySelector('#etch-a-sketch')
const drawingContext = canvas.getContext('2d')
const shakeButton = document.querySelector('.shake')
const MOVE_AMOUNT = 30 // UPPERCASE_WITH_UNDERSCORE indicates that the variable is a true constant and will not changes.
// Setup our canvas for drawing

// Creating a variable for hight and width via destructuring off the object canvas
// const width = canvas.width
// const height = canvas.height

// Destructed Approach
const { width, height } = canvas

// Create a random x and y coordinate starting points on the canvas
let x = Math.floor(Math.random() * width)
let y = Math.floor(Math.random() * height)

console.log(width, height)
drawingContext.lineJoin = 'round'
drawingContext.lineCap = 'round'
drawingContext.lineWidth = 25

// Define Color of DrawingContext
let hue = 0
drawingContext.strokeStyle = `hsl( ${hue}, 80%, 50% )`
// Define drawing starting point
drawingContext.beginPath()
drawingContext.moveTo(x, y)
drawingContext.lineTo(x, y)
drawingContext.stroke()

// Write a draw function

// - Rather than passing through a long list of items through a function, most Devs opt to pass through a single object and assign all needed properties onto the object
// function draw(options) {
//   console.log(options.key)
// }
// Similar to functions Objects can be destructed as well.

function draw({ key }) {
  // increment `hue` color
  hue += 10
  drawingContext.strokeStyle = `hsl( ${Math.random() * 360}, 80%, 50% )` //Needs to be explicitly stated each time, as it is not a live variable.
  console.log(key)
  // Start the Path
  drawingContext.beginPath()
  drawingContext.moveTo(x, y)
  // Map the x and y coordinates based on the users selected keys
  switch (key) {
    case 'ArrowUp':
      y -= MOVE_AMOUNT
      break
    case 'ArrowRight':
      x += MOVE_AMOUNT
      break
    case 'ArrowDown':
      y += MOVE_AMOUNT
      break
    case 'ArrowLeft':
      x -= MOVE_AMOUNT
      break

    default:
      break
  }
  drawingContext.lineTo(x, y)
  drawingContext.stroke()
}
// Write a handler for the keys
function handleKey(e) {
  // To prevent the keys from scrolling the page while moving the drawing on the canvas
  if (e.key.includes('Arrow')) {
    e.preventDefault()
    draw({ key: e.key })
    // console.log(e.key)
    // console.log('Handling Keys')
  }
}
// Write clear and shake function

function clearCanvas() {
  canvas.classList.add('shake')
  drawingContext.clearRect(0, 0, width, height) // Starting position at top the left and clear until the declared canvas height and width coordinates are reached.
  canvas.addEventListener(
    'animationEnd',
    function() {
      console.log('Done the Shake')
      canvas.classList.remove('shake')
    },
    { once: true }
  )
}

// Listen for arrow keys
// Add to the window to listen everywhere
window.addEventListener('keydown', handleKey)
shakeButton.addEventListener('click', clearCanvas)
