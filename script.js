
const link = document.querySelector('a');

// Function to highlight bold words in green
function highlight() {
    // Get all elements with the <strong> tag
    const boldElements = document.querySelectorAll('strong');

    // Change the color of bold elements to green
    boldElements.forEach(element => {
        element.style.color = 'green';
    });
}

// Function to revert the color of bold words to black
function return_normal() {
    // Get all elements with the <strong> tag
    const boldElements = document.querySelectorAll('strong');

    // Revert the color of bold elements to black
    boldElements.forEach(element => {
        element.style.color = 'black';
    });
}

// Add event listeners to the link for mouseover and mouseout events
link.addEventListener('mouseover', highlight);
link.addEventListener('mouseout', return_normal);