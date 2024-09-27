//Navigation bar effects on scroll
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});



// Highlight navbar links when visited.
// Get all navigation links and sections
const navLinks = document.querySelectorAll('.nav-items a');
const sections = document.querySelectorAll('section');

// Function to remove active class from all links
function removeActiveClass() {
    navLinks.forEach(link => link.classList.remove('active'));
}

// Add 'scroll' event listener to window
window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 50;
        if (scrollY >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });

    removeActiveClass();

    // Add active class to the current section's nav link
    navLinks.forEach(link => {
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});
