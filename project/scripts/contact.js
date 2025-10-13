const form = document.querySelector("form");


let review_count = parseInt(localStorage.getItem("review_count")) || 0;

form.addEventListener("submit", (e) => {
    review_count++;
    localStorage.setItem("review_count", review_count);

})