// ==============================
// Typing Animation
// ==============================

var typed = new Typed("#typing", {

    strings: [
        "Front-End Developer",
        "Web Designer",
        "JavaScript Developer",
        "UI Designer"
    ],

    typeSpeed: 100,
    backSpeed: 60,
    loop: true

});

// ==============================
// Dark Mode
// ==============================

const darkBtn = document.getElementById("darkMode");

darkBtn.onclick = () => {

    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {

        darkBtn.classList.remove("fa-moon");
        darkBtn.classList.add("fa-sun");

    }

    else {

        darkBtn.classList.remove("fa-sun");
        darkBtn.classList.add("fa-moon");

    }

};

// ==============================
// Scroll Progress Bar
// ==============================

window.onscroll = function () {

    progressBar();
    scrollTopBtn();

};

function progressBar() {

    let winScroll =
        document.documentElement.scrollTop;

    let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    let scrolled = (winScroll / height) * 100;

    document.getElementById("progressBar").style.width =
        scrolled + "%";

}

// ==============================
// Scroll To Top
// ==============================

const topBtn = document.getElementById("topBtn");

function scrollTopBtn() {

    if (document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300) {

        topBtn.style.display = "block";

    }

    else {

        topBtn.style.display = "none";

    }

}

topBtn.onclick = function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

// ==============================
// Navbar Active Link
// ==============================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ==============================
// Counter Animation
// ==============================

const counters = document.querySelectorAll(".stat h2");

const speed = 200;

counters.forEach(counter => {

    const update = () => {

        const target = +counter.innerText.replace("+", "").replace("%", "");

        const count = +counter.innerText.replace("+", "").replace("%", "");

        const inc = target / speed;

        if (count < target) {

            counter.innerText = Math.ceil(count + inc);

            setTimeout(update, 30);

        }

    };

    update();

});

// ==============================
// Contact Form
// ==============================

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("Thank you! Your message has been sent.");

    form.reset();

});

// ==============================
// Welcome
// ==============================

console.log("Luxury Portfolio Loaded Successfully");

function showMessage() {
    alert("Welcome to Gulshan Kumar's Portfolio! Thank you for visiting.");
}