//! Tabs

// Select and assign to variable names the `tab` and`tabpanel` role elements with `tabs` class elements

const tabs = document.querySelector('.tabs')
const tabButtons = tabs.querySelectorAll('[role="tab"]')
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]')

// Create a `handleTabClick` function
function handleTabClick(event) {
  console.log('You have been clicked!')
  // hide all tab panels
  // mark all tabs as unselected
  // mark the clicked tab as selected
  // find the associated tabPanel and show it
}

// Add Event Listeners to each `tabButton`
tabButtons.forEach(button => button.addEventListener('click', handleTabClick)) 
