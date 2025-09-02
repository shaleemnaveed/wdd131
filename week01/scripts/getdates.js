const currentyear = document.querySelector("#currentyear");

const today = new Date();
currentyear.innerHTML = `${today.getFullYear()}`;



const lastmodified = document.querySelector("#lastModified");

lastmodified.innerHTML = `Last Modification: ${document.lastModified}`;