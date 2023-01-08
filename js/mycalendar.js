const header = document.querySelector("header")

const images = document.querySelectorAll(".images img");

const links = document.querySelectorAll(".nav-link")

const toggle_btn = document.querySelector(".toggle-btn");

const hamburger = document.querySelector(".hamburger");

const prev_btn = document.querySelector(".prev-btn");
const next_btn = document.querySelector(".next-btn");








function updateCount(num, maxNum) {

    let currentNum = +num.innerText;
    
    if(currentNum < maxNum) {
        num.innerText = currentNum + 1;
        setTimeout(() => {
            updateCount(num, maxNum)
        }, 12);
    }
}

/* -----------Sticky Navbar -------------- */

function stickyNavbar(){
    header.classList.toggle("scrolled", window.pageYOffset > 0);
}   

stickyNavbar(); 

window.addEventListener("scroll", stickyNavbar);

/* -----------Reveal Animation -------------- */

let sr = ScrollReveal({
    duration: 2500,
    distance: "60px",
});

sr.reveal(".showcase-info", { delay: 600});
sr.reveal(".showcase-image", { origin: "top", delay: 700});

/* -----------Skills Progress Bar Animation -------------- */

function hasReached(el){
    let topPosition = el.getBoundingClientRect().top;

    if(window.innerHeight >= topPosition + el.offsetHeight) return true;
    return false;
} 

/*--------------Carousel Slides-----------------------*/

const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const slides = button
        .closest("[data-carousel]")
        .querySelector('[data-slides]'); 

        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;
        
        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    })
})
