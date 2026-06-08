// Custom Cursor Logic
const cursor = document.querySelector(".cursor");
const cursorDot = document.querySelector(".cursor-dot");

window.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX - 20 + "px";
    cursor.style.top = e.clientY - 20 + "px";
    cursorDot.style.left = e.clientX - 3 + "px";
    cursorDot.style.top = e.clientY - 3 + "px";
});

// Theme Toggle Logic
const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");
const body = document.body;

themeToggle.addEventListener("click", () => {
    if (body.getAttribute("data-theme") === "dark") {
        body.removeAttribute("data-theme");
        themeIcon.classList.replace("fa-sun", "fa-moon");
    } else {
        body.setAttribute("data-theme", "dark");
        themeIcon.classList.replace("fa-moon", "fa-sun");
    }
});

// Cursor Hover Effects
document.querySelectorAll("a, .btn, .skill-tag, .project-card").forEach(link => {
    link.addEventListener("mouseover", () => {
        cursor.style.transform = "scale(1.5)";
        cursor.style.background = "rgba(37, 99, 235, 0.1)";
    });
    link.addEventListener("mouseleave", () => {
        cursor.style.transform = "scale(1)";
        cursor.style.background = "transparent";
    });
});

// Scroll Reveal Animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// Trigger on load
reveal();

// Navbar transformation on scroll
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.padding = "10px 0";
        header.style.background = "rgba(255, 255, 255, 0.95)";
        header.style.boxShadow = "0 4px 6px -1px rgb(0 0 0 / 0.1)";
    } else {
        header.style.padding = "20px 0";
        header.style.background = "rgba(255, 255, 255, 0.8)";
        header.style.boxShadow = "none";
    }
});

// Smooth scroll for nav links (already handled by CSS scroll-behavior: smooth, but ensuring accessibility)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
