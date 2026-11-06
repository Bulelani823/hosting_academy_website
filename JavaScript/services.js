// Feature 1 Accordion functionality 

// Select all the buttons with the acc class 
const accordionButtons = document.querySelectorAll(".accordion");

// Loop through each accordion button 
accordionButtons.forEach((button) =>{

// Add a click event listener to each button 
button.addEventListener("click" ,() =>{

    //toggle the active class on the clicked button
    button.classList.toggle("active");

    //find the panel directly after the button
    const panel = button.nextElementSibling;

    //expand or collapse the panel
    panel.classList.toggle("open");

    //update whether the section is expanded
    button.setAttribute("aria-expanded", panel.classList.contains("open")
    );

});   


});

// Feature 2: Search functionality 

// Select the search input field 
const searchInput = document.getElementById("searchInput");

// Select all the destination cards
const courseCards= document.querySelectorAll(".courses-card");

// Select the no result message
const noResults = document.getElementById("noResults");

// Run the code whenever the user types  
searchInput.addEventListener("input", () => {

  // Get the search text and covert it to lowercase 
  const searchText = searchInput.value.toLowerCase().trim();

  //count how many destinations match the search 
  let matchCount = 0;

  //loop through every destination card 
  courseCards.forEach((card) =>{

    //get the destinations card 
    const CourseName = card.querySelector("h3").textContent.toLowerCase();

    //get the province name
    const DescriptionName = card.querySelector(".description ").textContent.toLocaleLowerCase();

    //Check whether the search matches the name or province

    if(CourseName.includes(searchText) || DescriptionName.includes(searchText)){

        //Display matching cards
        card.hidden = false;

        //Increase matching count
        matchCount++;

      } else {

        //Hide the cards that do not match
        card.hidden = true;
      }
    

  });

  //Shows a message when there are no matches
  noResults.hidden = matchCount !== 0;

});

//Feature 3: Lightbox

//Select all gallery Images
const galleryImages = document.querySelectorAll(".gallery-image");

//Select the ligthbox background 
const lightbox = document.getElementById("lightbox")

//Select the enlarged image element
const lightboxImage = document.getElementById("lightboxImage");

//Select the close button
const closeLightbox = document.getElementById("closeLightbox");

//Remember the element used to open the lightbox
let previousFocus = null;

//Function to open the lightbox
function openLightBox(image){

  //Save the current keyboard focus
  previousFocus = document.activeElement;

  //Use the image that you clicked 
  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt;

  //Display the lightbox overlay 
  lightbox.classList.add("active");

  //Move focus to the close button
  closeLightbox.focus();


}

//Function to close the lightbox
function hideLightBox(){

  //Hide the lightbox overlay
  lightbox.classList.remove("active");

  //Return focus to the previous element
  if(previousFocus){
    previousFocus.focus();
  }

}

// Add a click event to each image
galleryImages.forEach((image) => {

    image.addEventListener("click", () => {
        openLightBox(image);
    });

    // Allow keyboard users to open the image using Enter
    image.addEventListener("keydown", (event) => {

        if (event.key === "Enter") {
            openLightBox(image);
        }

    });

});

// Close when the X button is clicked
closeLightbox.addEventListener("click", hideLightBox);

// Close when the dark background is clicked
lightbox.addEventListener("click", (event) => {

    // Only close if the overlay itself was clicked
    if (event.target === lightbox) {
        hideLightBox();
    }

});

// Close lightbox by pressing the Escape key
document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        lightbox.classList.contains("active")
    ) {
        hideLightBox();
    }

    // Keep keyboard focus within the open lightbox
    if (
        event.key === "Tab" &&
        lightbox.classList.contains("active")
    ) {
        event.preventDefault();
        closeLightbox.focus();
    }

});