// JavaScript Code for Interactive Elements

// Smooth Scroll to Services Section
document.getElementById("learnMoreBtn").addEventListener("click", function () {
    document.getElementById("services").scrollIntoView({ behavior: "smooth" });
});

// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill out all fields.";
        formMessage.style.color = "red";
    } else {
        formMessage.textContent = "Thank you for contacting us, " + name + ". We will get back to you soon!";
        formMessage.style.color = "green";

        // Clear the form
        document.getElementById("contactForm").reset();
    }
});
