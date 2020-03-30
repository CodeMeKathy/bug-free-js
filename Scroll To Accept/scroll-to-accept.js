//! Scroll to Accept

//   //* Old Approach to determine if the scroll has reached the end of the div or specified element
// // Create a `scrollToAccept` function
// function scrollToAccept(event) {
//   // Select the `terms-and-condition` element
//   const terms = document.querySelector('.terms-and-conditions')
  
//   // Check to see if there is a terms element on the page
//   if(!terms) {
//     return // quit or exit running this function bc no terms element was located
//   }
//   // Add a Scroll Event listener to newly selected and named item representing the `terms-and-condition` element
//   terms.addEventListener('scroll', function (event) {

//     // console.log(event.currentTarget.scrollTop)
//     // console.log(event.currentTarget.scrollHeight)
//   })
// }

// scrollToAccept()

 //* Newer Scroll Approach uses `IntersectionObserver()` 
 
// Select the `terms-and-condition`, `watch` and `accept button` class elements
const terms = document.querySelector('.terms-and-conditions')
const watchStrongTag = document.querySelector('.watch')
const button = document.querySelector('.accept')
 
// Create a `obCallback` function
function obCallback(payload) {
  // console.log(payload[0].isIntersecting) // payload output includes isIntersecting; a boolean indicating if target is on the page
  // console.log(payload[0].intersectionRatio) // payload output includes intersectionRatio; a numeric value indicating how much the target is on the page from 0 to 1, the later indicating it is 100% on the page.
  if (payload[0].intersectionRatio === 1) {
    button.disabled = false
    console.log('Removing Disability')
    // Use else statement to re-enable the disability or to simply stop observing once initial criteria met use `unobserve`
    observer.unobserve(terms.lastElementChild) // This approach save CPU power
  } 
  // else {
  //   button.disabled = true
  // }
}
const observer = new IntersectionObserver(obCallback, {
  root: terms,
  threshold: 1
})

// observer.observe(watchStrongTag)
observer.observe(terms.lastElementChild)
