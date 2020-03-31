//! Tabs

// Select and assign to variable names the `tab` and`tabpanel` role elements with `tabs` class elements

const tabs = document.querySelector('.tabs')
const tabButtons = tabs.querySelectorAll('[role="tab"]')
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]')

// Create a `handleTabClick` function
function handleTabClick(event) {
  // console.log('You have been clicked!')
// hide all tab panels
  // console.log(tabPanels) // Returns a node list with three div elements
  // // Traditional function
  // tabPanels.forEach(function (panel) {  
  //   // console.log(panel)
  //   panel.hidden = true
  // })
  tabPanels.forEach(panel => {
    panel.hidden = true
  })
// mark all tabs as unselected
  tabButtons.forEach(tab => {
    // tab.ariaSelected = false
    tab.setAttribute('aria-selected', false)
  })
// mark the clicked tab as selected
  event.currentTarget.setAttribute('aria-selected',true )
// find the associated tabPanel and show it
  // console.log(event.currentTarget.id)
  const id = event.currentTarget.id
  // console.log(event.currentTarget.id)

// //* Method 1
  // const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`)
  // console.log(tabPanel)
  // tabPanel.hidden = false

//* Method 2 -find in array of tabPanels
// Convert tabPanels which is a node list into an array
  const arrTabPanel = Array.from(tabs.querySelectorAll('[role="tabpanel"]'))
  console.log(arrTabPanel)
// Use the .find() on the newly created array list
  const tabPanel = arrTabPanel.find(panel => panel.getAttribute('aria-labelledby') === id)
  tabPanel.hidden = false

}

// Add Event Listeners to each `tabButton`
tabButtons.forEach(button => button.addEventListener('click', handleTabClick)) 
