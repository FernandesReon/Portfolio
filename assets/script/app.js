//Services section - Modal
// Select all the modals and buttons
const serviceModals = document.querySelectorAll(".service-modal");
const learnMoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

// Function to show the modal
var modal = function(modalClick) {
    serviceModals[modalClick].classList.add("active");
}

// Attach event listener to each "Learn More" button
learnMoreBtns.forEach((learnMoreBtn, i) => {
    learnMoreBtn.addEventListener("click", () => {
        modal(i);
    });
});

// Close modal when clicking the close button
modalCloseBtns.forEach((modalCloseBtn, i) => {
    modalCloseBtn.addEventListener("click", () => {
        serviceModals[i].classList.remove("active");
    });
});


// Portfolio modal.
const portfolioModals = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

// Function to show the modal
var portfolioModal = function(modalClick) {
    portfolioModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        portfolioModal(i);
    });
});

portfolioCloseBtns.forEach((portfolioCloseBtn, i) => {
    portfolioCloseBtn.addEventListener("click", () => {
        portfolioModals[i].classList.remove("active");
    });
});


// Scroll to top button
const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
    scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});