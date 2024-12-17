/* HELLO WORLD!!!*/
/*In this Javascript [Slider.js]. It contains the {SECTION(5) - .cid-ushO5atRlD} script for my HTML website. 
This code still needs improvements because the width of the slide is limited and if I change the slideWidth = high integer{ex. 1000px-200px} 
it'll ruined my responsive designs on my HTML website */
/*P.S. I really don't know how to fix this problem or error because even AI can't help me HAHAHAHA*/
let currentIndex = 0;
const slideWidth = 300;
    function moveSlide(direction) {
        const container = document.querySelector('.embla__container');
        const slides = document.querySelectorAll('.embla__slide');
        const totalSlides = slides.length;

        if (direction === 'left') {
            if (currentIndex > 0) {currentIndex--;}
        } 
        else if (direction === 'right') {
            if (currentIndex < totalSlides - 1) {currentIndex++;}
        }
        container.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
