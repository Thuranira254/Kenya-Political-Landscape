// Add an event listener to the contact form
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    alert("Thank you for reaching out! We will get back to you soon.");
});

// Add functionality to toggle "Read More" content
document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        const blogDetails = this.nextElementSibling;
        if (blogDetails.style.display === 'none' || blogDetails.style.display === '') {
            blogDetails.style.display = 'block';
            this.textContent = 'Read Less';
        } else {
            blogDetails.style.display = 'none';
            this.textContent = 'Read More';
        }
    });
});