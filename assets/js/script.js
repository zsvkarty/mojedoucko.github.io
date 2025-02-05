'use strict';



/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const elemArr = [navCloseBtn, overlay, navOpenBtn];

for (let i = 0; i < elemArr.length; i++) {
  elemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

/**
 * toggle navbar & overlay when click any navbar-link
 */

const navbarLinks = document.querySelectorAll("[data-navbar-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}





/**
 * header & go-top-btn active
 * when window scroll down to 400px
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 400) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});


document.addEventListener('DOMContentLoaded', function() {
    const testimonialSection = document.querySelector('.testimonial-section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                testimonialSection.classList.add('in-view');
                observer.unobserve(testimonialSection); // Stop observing after it's in view
            }
        });
    }, {
        threshold: 0.2 // Trigger when 20% of the section is visible
    });

    observer.observe(testimonialSection);

    // Existing click handlers for profile images...
    const profileImages = document.querySelectorAll('.profile-image');
    const testimonials = document.querySelectorAll('.testimonial');

    profileImages.forEach(image => {
        image.addEventListener('click', function() {
            // Remove active class from all images and testimonials
            profileImages.forEach(img => img.classList.remove('active'));
            testimonials.forEach(testimonial => testimonial.classList.remove('active'));

            // Add active class to the clicked image
            this.classList.add('active');

            // Get the testimonial ID from the data attribute
            const testimonialId = this.dataset.testimonial;

            // Find the corresponding testimonial and add active class
            const testimonialElement = document.getElementById(testimonialId);
            if (testimonialElement) {
                testimonialElement.classList.add('active');
            }
        });
    });
});