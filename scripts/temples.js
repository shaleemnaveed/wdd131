const hamburgerButton = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburgerButton.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    hamburgerButton.innerHTML = navLinks.classList.contains("show") ? "✖" : "☰";
});