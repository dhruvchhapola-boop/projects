document.addEventListener("DOMContentLoaded", () => {

    /* ================= MOBILE NAV TOGGLE ================= */

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    /* ================= SMOOTH NAV CLOSE ON CLICK ================= */

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });

    /* ================= COUNTER ANIMATION ================= */

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {
        const updateCounter = () => {
            const target = +counter.getAttribute("data-target");
            const current = +counter.innerText;

            const increment = target / 200;

            if (current < target) {
                counter.innerText = Math.ceil(current + increment);
                setTimeout(updateCounter, 20);
            } else {
                counter.innerText = target;
            }
        };

        updateCounter();
    });

    /* ================= GALLERY LIGHTBOX ================= */

    const galleryItems = document.querySelectorAll(".gallery-item img");
    const lightbox = document.querySelector(".lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeLightbox = document.querySelector(".close-lightbox");

    galleryItems.forEach(img => {
        img.addEventListener("click", () => {
            lightbox.style.display = "flex";
            lightboxImg.src = img.src;
        });
    });

    closeLightbox.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });

    /* ================= TESTIMONIAL SLIDER ================= */

    const testimonials = document.querySelectorAll(".testimonial");
    let index = 0;

    function showTestimonial() {
        testimonials.forEach(t => t.classList.remove("active"));
        testimonials[index].classList.add("active");

        index = (index + 1) % testimonials.length;
    }

    showTestimonial();
    setInterval(showTestimonial, 4000);

    /* ================= SCROLL TO TOP BUTTON ================= */

    const topBtn = document.getElementById("topBtn");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    });

    topBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    /* ================= RESERVATION FORM ================= */

    const form = document.querySelector(".reservation-form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        alert("🎉 Reservation submitted successfully! We will contact you soon.");

        form.reset();
    });

});