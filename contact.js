document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#contactForm");
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const phoneField = document.getElementById("phone");
    const subjectField = document.getElementById("subject");
    const messageField = document.getElementById("massage");

    const errorMessages = document.querySelectorAll(".error_txt");

    form.addEventListener("submit", (e) => {
        let hasError = false;

        // Reset all error messages
        errorMessages.forEach((error) => {
            error.style.display = "none";
        });

        // Validate Full Name
        if (nameField.value.trim() === "") {
            displayError(nameField, "Full Name can't be blank *");
            hasError = true;
        } else if (!validateFullName(nameField.value)) {
            displayError(nameField, "Full Name cannot contain numbers or symbols *");
            hasError = true;
        }

        // Validate Email
        if (emailField.value.trim() === "") {
            displayError(emailField, "Email Address can't be blank *");
            hasError = true;
        } else if (!validateEmail(emailField.value)) {
            displayError(emailField, "Please enter a valid Email Address *");
            hasError = true;
        }

        // Validate Phone Number
        if (phoneField.value.trim() === "") {
            displayError(phoneField, "Phone Number can't be blank *");
            hasError = true;
        } else if (!validatePhone(phoneField.value)) {
            displayError(phoneField, "Please enter a valid Phone Number *");
            hasError = true;
        }

        // Validate Subject
        if (subjectField.value.trim() === "") {
            displayError(subjectField, "Subject can't be blank *");
            hasError = true;
        }

        // Validate Message
        if (messageField.value.trim() === "") {
            displayError(messageField, "Message can't be blank *");
            hasError = true;
        }

        // Prevent form submission if there are errors
        if (hasError) {
            e.preventDefault();
        }
    });

    // Function to display error
    function displayError(inputField, message) {
        const errorElement = inputField.nextElementSibling;
        errorElement.textContent = message;
        errorElement.style.display = "block";
    }

    // Function to validate full name (letters and spaces only)
    function validateFullName(name) {
        const namePattern = /^[a-zA-Z\s]+$/; // Only allows letters and spaces
        return namePattern.test(name);
    }

    // Function to validate email
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // Function to validate phone number
    function validatePhone(phone) {
        const phonePattern = /^\d{10,15}$/; // Allows 10 to 15 digits
        return phonePattern.test(phone);
    }
});

//Clicking an image toggles the clicked class, triggering the CSS animation to slide in the overlay.
    document.querySelectorAll('.image-item').forEach(item => {
        item.addEventListener('click', () => {
            // Toggle the clicked state
            item.classList.toggle('clicked');
        });

        // Optional: Remove the overlay when clicked again
        item.querySelector('.overlay').addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent bubbling
            item.classList.remove('clicked');
        });
    });

    
    /* ********************* Creating a Typing Effect****************************** */
    const roles = ["Web Developer.", "Software Developer.", "Web Designer.", "Game Developer.", "Video Production."];
    const dynamicText = document.getElementById("dynamic-text");
    let index = 0;
    let charIndex = 0;
    let isDeleting = false;
    let speed = 150;
    
    function typeEffect() {
        const currentRole = roles[index];
        dynamicText.textContent = isDeleting
            ? currentRole.substring(0, charIndex--)
            : currentRole.substring(0, charIndex++);
    
        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            speed = 200; // Pause before deleting
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % roles.length;
            speed = 200;
        }
    
        setTimeout(typeEffect, speed);
    }
    
    typeEffect();
    

    function toggleMenu() {
        const navbar = document.querySelector('.navbar');
        navbar.classList.toggle('active');
    }


    /* ******************* Responsive cad slide implementation **************************** */ 
    let currentSlide = 0;

function moveSlide(step) {
    const sliderContainer = document.querySelector(".slider-container");
    const totalSlides = document.querySelectorAll(".slider-item").length;

    currentSlide = (currentSlide + step + totalSlides) % totalSlides;
    sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}


/* **********************************************************************/
document.addEventListener("DOMContentLoaded", () => {
    const sliderItems = document.querySelectorAll(".slider-item");

    sliderItems.forEach(item => {
        item.addEventListener("click", () => {
            // Toggle the 'clicked' class on the clicked item
            item.classList.toggle("clicked");
        });
    });
});

let currentIndex = 0;

function moveSlide(direction) {
    const sliderContainer = document.querySelector(".slider-container");
    const sliderItems = document.querySelectorAll(".slider-item");
    const totalSlides = sliderItems.length;

    currentIndex += direction;

    // Wrap around slides
    if (currentIndex < 0) currentIndex = totalSlides - 1;
    if (currentIndex >= totalSlides) currentIndex = 0;

    // Move slides
    sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

/*********** Close the menu when a link is clicked in mobile view**************/

// Toggle menu visibility
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active'); // Toggle 'active' class
  }
  
  // Close the menu when a link is clicked in mobile view
  document.querySelectorAll('.nav_bar a').forEach(link => {
    link.addEventListener('click', () => {
      const navbar = document.querySelector('.navbar');
      if (window.innerWidth <= 768) { // Apply only for mobile view
        navbar.classList.remove('active'); // Hide menu
      }
    });
  });
  
  