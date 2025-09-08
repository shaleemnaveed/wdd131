const currentyear = document.getElementById("currentyear");

const today = new Date();
currentyear.innerHTML = `${today.getFullYear()}`;



const lastmodified = document.getElementById("lastModified");

lastmodified.innerHTML = `Last Modification: ${document.lastModified}`;

const hamburgerButton = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburgerButton.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    hamburgerButton.innerHTML = navLinks.classList.contains("show") ? "✖" : "☰";
});