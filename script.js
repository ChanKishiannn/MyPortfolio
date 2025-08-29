const hamburger = document.querySelector(".hamburger-icon");
const navbarButtons = document.querySelectorAll(".navbar-button");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navbarButtons.forEach(button => {
        button.classList.toggle("active");
    });
});
