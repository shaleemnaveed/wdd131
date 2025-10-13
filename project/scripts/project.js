// ====== FUNCTIONS ======

// Update current year
function updateCurrentYear() {
    const currentYearElement = document.getElementById('currentyear');
    const today = new Date();
    currentYearElement.textContent = today.getFullYear();
}

// Update last modified date
function updateLastModified() {
    const lastModifiedElement = document.getElementById('lastmodified');
    lastModifiedElement.textContent = `Last Modification: ${document.lastModified}`;
}

// Toggle navigation menu (hamburger)
function setupHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('show');
        hamburger.textContent = nav.classList.contains('show') ? '✖' : '☰';
    });
}

// ====== INITIALIZE EVERYTHING ======
function init() {
    updateCurrentYear();
    updateLastModified();
    setupHamburgerMenu();
}

// Run initialization after DOM loads
document.addEventListener('DOMContentLoaded', init);
