
(function() {
    'use strict';
})();


document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('carousel-track');
    const slides = Array.from(track.children);
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    let currentIndex = 0;

    function updateCarousel() {
        // Move the track to show the current slide
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length; // Loop to the first slide
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Loop to the last slide
        updateCarousel();
    });

    // Initialize the carousel position
    updateCarousel();
});
// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.clicky-menu');

hamburger.addEventListener('click', () => {
   hamburger.classList.toggle('open');
   menu.classList.toggle('show');
});




