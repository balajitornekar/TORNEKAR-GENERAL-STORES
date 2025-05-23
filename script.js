// script.js

// This message will appear in your browser's developer console (F12)
// when the script file is successfully loaded and executed.
console.log("script.js is loaded successfully!");

// -------------------------------------------------------------------
// Contact Form Client-Side Validation
// This script will check if the contact form fields are filled
// before the form is submitted.
// Note: Actual email sending requires server-side code (e.g., PHP, Node.js).
// -------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
    // Select the contact form using its class name
    const contactForm = document.querySelector('.contact-form');

    // Check if the contact form exists on the current page
    if (contactForm) {
        // Add an event listener for when the form is submitted
        contactForm.addEventListener('submit', function(event) {
            // Get references to the input fields
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            // --- Perform Validation Checks ---

            // Validate Name field
            if (nameInput.value.trim() === '') { // .trim() removes leading/trailing whitespace
                alert('Please enter your name.');
                event.preventDefault(); // Stop the form from submitting
                nameInput.focus(); // Put cursor back into the name field
                return false; // Exit the function
            }

            // Validate Email field
            // Check if it's empty AND if it contains an '@' symbol for a very basic email check
            if (emailInput.value.trim() === '' || !emailInput.value.includes('@') || !emailInput.value.includes('.')) {
                alert('Please enter a valid email address (e.g., example@domain.com).');
                event.preventDefault();
                emailInput.focus();
                return false;
            }

            // Validate Message field
            if (messageInput.value.trim() === '') {
                alert('Please enter your message.');
                event.preventDefault();
                messageInput.focus();
                return false;
            }

            // If all validation checks pass, the form will proceed to submit
            // (to the 'action' URL specified in your HTML, e.g., 'submit_form.php')
            console.log("Form data is valid. Attempting to submit...");
            alert('Your message is being sent! (Note: Actual email delivery requires server-side setup)');
            // You might add an AJAX call here if you want to submit the form without page refresh
        });
    }

    // -------------------------------------------------------------------
    // Example of a simple interactive element (optional for later)
    // You can uncomment and adapt this if you add an element with ID "alertButton"
    // -------------------------------------------------------------------

    // const alertButton = document.getElementById('alertButton');
    // if (alertButton) {
    //     alertButton.addEventListener('click', function() {
    //         alert('You clicked a button!');
    //     });
    // }

}); // End of DOMContentLoaded