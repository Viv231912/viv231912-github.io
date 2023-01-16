const header = document.querySelector("header")

const first_skill = document.querySelector(".skill:first-child");
const sk_counters = document.querySelectorAll(".counter span");
const progress_bars = document.querySelectorAll(".skills svg circle");

// const ml_section = document.querySelector(".milestones");
// const ml_counters = document.querySelectorAll(".number span");

const prt_section = document.querySelector(".portfolio");
const zoom_icons = document.querySelectorAll(".zoom-icon");
const modal_overlay = document.querySelector(".modal-overlay");
const images = document.querySelectorAll(".images img");
const prev_btn = document.querySelector(".prev-btn");
const next_btn = document.querySelector(".next-btn");


const links = document.querySelectorAll(".nav-link")

const toggle_btn = document.querySelector(".toggle-btn");

const hamburger = document.querySelector(".hamburger");



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



/* ----------- Change Page Theme-------------- */ 

let firstTheme = localStorage.getItem("dark");

changeTheme(+firstTheme);

function changeTheme(isDark) {
    if(isDark){
        document.body.classList.add("dark");
        toggle_btn.classList.replace("uil-moon","uil-sun" )
        localStorage.setItem("dark", 1);
    }
    else{
        document.body.classList.remove("dark");
        toggle_btn.classList.replace("uil-sun", "uil-moon");
        localStorage.setItem("dark", 0);

    }
} 

toggle_btn.addEventListener("click", () => {
    changeTheme(!document.body.classList.contains("dark"));
});

/* ----------- Open & Close Navbar Menu------------- */ 

hamburger.addEventListener("click", ()=> {
    document.body.classList.toggle("open");
    document.body.classList.toggle("stopScrolling");
});
console.log(hamburger)

links.forEach(link => link.addEventListener("click", () => {
    document.body.classList.remove("open");
    document.body.classList.remove("stopScrolling");
}));

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