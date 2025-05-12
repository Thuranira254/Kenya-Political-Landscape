// Add an event listener to the contact form
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    alert("Thank you for reaching out! We will get back to you soon.");
});