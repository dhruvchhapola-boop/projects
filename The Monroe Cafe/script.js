/*=================================================
    THE MONROE CAFE
    PREMIUM JAVASCRIPT
    PART 1
=================================================*/

"use strict";

/*=========================================
    SELECTORS
=========================================*/

const header = document.getElementById("header");
const progressBar = document.getElementById("progress-bar");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");
const topBtn = document.getElementById("topBtn");

/*=========================================
    MOBILE MENU
=========================================*/

if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if (navLinks.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");
        } else {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        }

    });

}

/*=========================================
    CLOSE MENU AFTER CLICK
=========================================*/

navItems.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");

    });

});

/*=========================================
    SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth",
            block: "start"

        });

    });

});

/*=========================================
    STICKY HEADER
=========================================*/

function stickyHeader() {

    if (window.scrollY > 60) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}

/*=========================================
    SCROLL PROGRESS BAR
=========================================*/

function updateProgressBar() {

    const scrollTop = window.pageYOffset;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / height) * 100;

    progressBar.style.width = progress + "%";

}

/*=========================================
    ACTIVE NAVIGATION
=========================================*/

const sections = document.querySelectorAll("section");

function activeNavigation() {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === "#" + current) {

            link.classList.add("active");

        }

    });

}

/*=========================================
    WINDOW SCROLL EVENTS
=========================================*/

window.addEventListener("scroll", () => {

    stickyHeader();

    updateProgressBar();

    activeNavigation();

});

/*=========================================
    INITIAL LOAD
=========================================*/

stickyHeader();

updateProgressBar();

activeNavigation();
/*=================================================
    THE MONROE CAFE
    PREMIUM JAVASCRIPT
    PART 2
=================================================*/

/*=========================================
    COUNTER ANIMATION
=========================================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const target = parseFloat(counter.dataset.target);

        if (isNaN(target)) return;

        const decimals = target % 1 !== 0 ? 1 : 0;
        const duration = 2000;
        const start = performance.now();

        function update(time) {

            const progress = Math.min((time - start) / duration, 1);

            const value = target * progress;

            counter.textContent = value.toFixed(decimals);

            if (progress < 1) {

                requestAnimationFrame(update);

            } else {

                counter.textContent = target.toFixed(decimals);

            }

        }

        requestAnimationFrame(update);

        observer.unobserve(counter);

    });

}, {

    threshold: 0.5

});

counters.forEach(counter => counterObserver.observe(counter));

/*=========================================
    FADE UP ANIMATION
=========================================*/

const revealElements = document.querySelectorAll(

    ".about-grid,\
     .feature,\
     .stat-box,\
     .why-card,\
     .menu-card,\
     .gallery-item,\
     .event-card,\
     .testimonial,\
     .contact-item,\
     .newsletter-box,\
     .faq details"

);

revealElements.forEach(el => {

    el.classList.add("fade-up");

});

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .15

});

revealElements.forEach(el => revealObserver.observe(el));

/*=========================================
    BACK TO TOP BUTTON
=========================================*/

function toggleTopButton() {

    if (window.scrollY > 500) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

}

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/*=========================================
    HERO PARALLAX
=========================================*/

const hero = document.querySelector(".hero-content");

function heroParallax() {

    if (!hero) return;

    const offset = window.scrollY * 0.3;

    hero.style.transform = `translateY(${offset}px)`;

}

window.addEventListener("scroll", heroParallax);

/*=========================================
    IMAGE LAZY LOADING
=========================================*/

const lazyImages = document.querySelectorAll("img");

const lazyObserver = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const img = entry.target;

        if (img.dataset.src) {

            img.src = img.dataset.src;

        }

        img.classList.add("loaded");

        observer.unobserve(img);

    });

}, {

    rootMargin: "100px"

});

lazyImages.forEach(img => {

    lazyObserver.observe(img);

});

/*=========================================
    WINDOW EVENTS
=========================================*/

window.addEventListener("scroll", () => {

    toggleTopButton();

});

toggleTopButton();
/*=================================================
    THE MONROE CAFE
    PREMIUM JAVASCRIPT
    PART 3
=================================================*/

/*=========================================
    TESTIMONIAL AUTO SLIDER
=========================================*/

const testimonials = document.querySelectorAll(".testimonial");
let testimonialIndex = 0;

function showTestimonial(index) {

    testimonials.forEach((item) => {

        item.classList.remove("active");

    });

    testimonials[index].classList.add("active");

}

function nextTestimonial() {

    testimonialIndex++;

    if (testimonialIndex >= testimonials.length) {

        testimonialIndex = 0;

    }

    showTestimonial(testimonialIndex);

}

if (testimonials.length > 0) {

    showTestimonial(0);

    setInterval(nextTestimonial, 5000);

}

/*=========================================
    WISHLIST BUTTON
=========================================*/

const wishlistButtons = document.querySelectorAll(".wishlist");

wishlistButtons.forEach(button => {

    button.addEventListener("click", function () {

        const icon = this.querySelector("i");

        icon.classList.toggle("far");
        icon.classList.toggle("fas");

        if (icon.classList.contains("fas")) {

            icon.style.color = "#ff3b5c";

            this.style.background = "#ffffff";

        } else {

            icon.style.color = "#ffffff";

            this.style.background = "rgba(0,0,0,.55)";

        }

    });

});

/*=========================================
    MENU FILTER
=========================================*/

const filterButtons = document.querySelectorAll(".menu-filter button");
const menuCards = document.querySelectorAll(".menu-card");

/*
    HTML currently has no category classes.
    Add classes like:

    <div class="menu-card pizza">
    <div class="menu-card indian">

    Then this filter works automatically.
*/

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        const category = button.textContent.trim().toLowerCase();

        menuCards.forEach(card => {

            if (category === "all") {

                card.style.display = "block";

                setTimeout(() => {

                    card.style.opacity = "1";
                    card.style.transform = "scale(1)";

                }, 50);

            }

            else if (card.classList.contains(category)) {

                card.style.display = "block";

                setTimeout(() => {

                    card.style.opacity = "1";
                    card.style.transform = "scale(1)";

                }, 50);

            }

            else {

                card.style.opacity = "0";
                card.style.transform = "scale(.9)";

                setTimeout(() => {

                    card.style.display = "none";

                }, 300);

            }

        });

    });

});

/*=========================================
    GALLERY LIGHTBOX
=========================================*/

const galleryImages = document.querySelectorAll(".gallery-item img");

let lightbox = document.createElement("div");

lightbox.id = "lightbox";

lightbox.innerHTML = `

<div class="lightbox-container">

    <span class="lightbox-close">&times;</span>

    <img class="lightbox-image">

</div>

`;

document.body.appendChild(lightbox);

const lightboxImage = lightbox.querySelector(".lightbox-image");
const closeLightbox = lightbox.querySelector(".lightbox-close");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImage.src = img.src;

        document.body.style.overflow = "hidden";

    });

});

closeLightbox.addEventListener("click", () => {

    lightbox.style.display = "none";

    document.body.style.overflow = "";

});

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

        lightbox.style.display = "none";

        document.body.style.overflow = "";

    }

});

/*=========================================
    ESC KEY CLOSE
=========================================*/

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        lightbox.style.display = "none";

        document.body.style.overflow = "";

    }

});

/*=========================================
    LIGHTBOX CSS
=========================================*/

const lightboxStyle = document.createElement("style");

lightboxStyle.innerHTML = `

#lightbox{

position:fixed;
inset:0;
background:rgba(0,0,0,.92);
display:none;
justify-content:center;
align-items:center;
z-index:99999;
padding:30px;

}

.lightbox-container{

position:relative;
max-width:900px;
width:100%;

}

.lightbox-image{

width:100%;
max-height:85vh;
object-fit:contain;
border-radius:15px;

}

.lightbox-close{

position:absolute;
top:-45px;
right:0;
font-size:40px;
color:#fff;
cursor:pointer;
transition:.3s;

}

.lightbox-close:hover{

color:#D4AF37;

}

`;

document.head.appendChild(lightboxStyle);
/*=================================================
    THE MONROE CAFE
    PREMIUM JAVASCRIPT
    PART 4 (FINAL)
=================================================*/

/*=========================================
    RESERVATION FORM VALIDATION
=========================================*/

const reservationForm = document.querySelector(".reservation-form");

if (reservationForm) {

    reservationForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const inputs = reservationForm.querySelectorAll("input, textarea, select");

        const name = inputs[0].value.trim();
        const phone = inputs[1].value.trim();
        const email = inputs[2].value.trim();
        const date = inputs[3].value;
        const time = inputs[4].value;

        if (name.length < 3) {
            alert("Please enter your full name.");
            return;
        }

        if (!/^[6-9]\d{9}$/.test(phone)) {
            alert("Enter a valid 10-digit phone number.");
            return;
        }

        if (email !== "" &&
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {

            alert("Please enter a valid email address.");
            return;
        }

        if (date === "") {
            alert("Please select a reservation date.");
            return;
        }

        if (time === "") {
            alert("Please select a reservation time.");
            return;
        }

        alert(
            "🎉 Thank you!\n\nYour reservation request has been received.\nWe will contact you shortly."
        );

        reservationForm.reset();

    });

}

/*=========================================
    NEWSLETTER
=========================================*/

const newsletterForm = document.querySelector(".newsletter form");

if (newsletterForm) {

    newsletterForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const emailInput = this.querySelector("input");

        const email = emailInput.value.trim();

        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {

            alert("Please enter a valid email.");

            emailInput.focus();

            return;

        }

        alert("✅ Thank you for subscribing!");

        emailInput.value = "";

    });

}

/*=========================================
    BUTTON RIPPLE EFFECT
=========================================*/

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const diameter = Math.max(
            this.clientWidth,
            this.clientHeight
        );

        const radius = diameter / 2;

        circle.style.width = circle.style.height =
            `${diameter}px`;

        circle.style.left =
            `${e.clientX - this.offsetLeft - radius}px`;

        circle.style.top =
            `${e.clientY - this.offsetTop - radius}px`;

        circle.classList.add("ripple");

        const ripple = this.querySelector(".ripple");

        if (ripple) ripple.remove();

        this.appendChild(circle);

    });

});

/*=========================================
    RIPPLE STYLE
=========================================*/

const rippleStyle = document.createElement("style");

rippleStyle.innerHTML = `

.btn{

position:relative;
overflow:hidden;

}

.ripple{

position:absolute;
border-radius:50%;
transform:scale(0);
background:rgba(255,255,255,.45);
animation:ripple .6s linear;
pointer-events:none;

}

@keyframes ripple{

to{

transform:scale(4);
opacity:0;

}

}

`;

document.head.appendChild(rippleStyle);

/*=========================================
    PRELOAD IMAGES
=========================================*/

window.addEventListener("load", () => {

    document.querySelectorAll("img").forEach(img => {

        const image = new Image();

        image.src = img.src;

    });

});

/*=========================================
    DISABLE RIGHT CLICK
    (OPTIONAL)
=========================================*/

// Uncomment if required

/*
document.addEventListener("contextmenu", function(e){

    e.preventDefault();

});
*/

/*=========================================
    KEYBOARD ACCESSIBILITY
=========================================*/

document.addEventListener("keyup", function (e) {

    if (e.key === "Home") {

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    }

});

/*=========================================
    PAGE LOADED ANIMATION
=========================================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/*=========================================
    CONSOLE MESSAGE
=========================================*/

console.log(`
==========================================
        THE MONROE CAFE
==========================================

Website Loaded Successfully

Features Enabled:
✔ Mobile Navigation
✔ Sticky Header
✔ Progress Bar
✔ Active Navigation
✔ Smooth Scroll
✔ Animated Counters
✔ Reveal Animations
✔ Testimonial Slider
✔ Wishlist
✔ Gallery Lightbox
✔ Menu Filter
✔ Reservation Validation
✔ Newsletter Validation
✔ Ripple Buttons
✔ Back To Top

Developed with ❤️
==========================================
`);

/*=========================================
    END OF SCRIPT
=========================================*/