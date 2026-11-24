
// ==========================================
// 1. AOS ANIMATION INITIALIZATION
// ==========================================

AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    easing: "ease-in-out"
});


// ==========================================
// 2. NAVBAR ACTIVE LINK ON SCROLL
// ==========================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar .nav-link");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - 150) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});


// ==========================================
// 3. CLOSE NAVBAR AFTER CLICKING A LINK
// ==========================================

const navbarCollapse = document.querySelector(".navbar-collapse");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navbarCollapse.classList.contains("show")) {

            const bsCollapse = bootstrap.Collapse.getOrCreateInstance(
                navbarCollapse
            );

            bsCollapse.hide();

        }

    });

});


// ==========================================
// 4. TYPING ANIMATION
// ==========================================

const profession = document.querySelector(".home-content h5");

const roles = [
    "Full Stack Developer",
    "Data Science & Analytics"
];

let roleIndex = 0;
let characterIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (isDeleting) {

        profession.textContent = currentRole.substring(
            0,
            characterIndex - 1
        );

        characterIndex--;

    } else {

        profession.textContent = currentRole.substring(
            0,
            characterIndex + 1
        );

        characterIndex++;

    }

    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && characterIndex === currentRole.length) {

        isDeleting = true;
        typingSpeed = 1500;

    }

    else if (isDeleting && characterIndex === 0) {

        isDeleting = false;

        roleIndex++;

        if (roleIndex >= roles.length) {
            roleIndex = 0;
        }

        typingSpeed = 500;

    }

    setTimeout(typeEffect, typingSpeed);

}

if (profession) {
    typeEffect();
}


// ==========================================
// 5. SMOOTH SCROLLING
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const targetSection = document.querySelector(targetId);

        if (targetSection) {

            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// ==========================================
// 6. BACK TO TOP BUTTON
// ==========================================

const backToTop = document.createElement("button");

backToTop.innerHTML = '<i class="bi bi-arrow-up"></i>';

backToTop.setAttribute("aria-label", "Back to top");

backToTop.style.position = "fixed";
backToTop.style.bottom = "25px";
backToTop.style.right = "25px";
backToTop.style.width = "45px";
backToTop.style.height = "45px";
backToTop.style.border = "none";
backToTop.style.borderRadius = "50%";
backToTop.style.background = "linear-gradient(135deg, #2563eb, #8b5cf6)";
backToTop.style.color = "white";
backToTop.style.fontSize = "20px";
backToTop.style.cursor = "pointer";
backToTop.style.display = "none";
backToTop.style.zIndex = "999";
backToTop.style.transition = "0.3s";

document.body.appendChild(backToTop);

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }

});

backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ==========================================
// 7. CONTACT FORM VALIDATION
// ==========================================

const contactForm = document.querySelector(".contact-form form");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        const name = document.querySelector("#contact-name").value.trim();

        const email = document.querySelector("#contact-email").value.trim();

        const message = document.querySelector("#contact-message").value.trim();

        if (name === "" || email === "" || message === "") {

            event.preventDefault();

            alert("Please fill in all the fields.");

            return;

        }

        if (name.length < 2) {

            event.preventDefault();

            alert("Please enter a valid name.");

            return;

        }

        alert("Thank you! Your message is being submitted.");

    });

}


// ==========================================
// 8. UPDATE COPYRIGHT YEAR
// ==========================================

const copyright = document.querySelector(".footer-bottom p");

if (copyright) {

    copyright.innerHTML = copyright.innerHTML.replace(
        /©\s*\d{4}/,
        "© " + new Date().getFullYear()
    );

}


// ==========================================
// 9. CONSOLE MESSAGE
// ==========================================

console.log("Welcome to Disha Mehta's Portfolio!");
console.log("Portfolio JavaScript Loaded Successfully!");
