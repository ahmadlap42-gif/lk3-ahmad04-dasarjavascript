// =============================
// TYPING EFFECT
// =============================

const typingElement = document.getElementById("typing");

const words = [
    "Web Developer",
    "UI Designer",
    "Programmer",
    "Content Creator"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {
        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {
            deleting = true;
xtTimeout(typingEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(
        typingEffect,
        deleting ? 60 : 100
    );
}

typingEffect();


// =============================
// MOBILE MENU
// =============================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


// Tutup menu setelah memilih link

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });

});


// =============================
// CONTACT FORM
// =============================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        "Terima kasih, " +
        name +
        "! Pesan kamu berhasil dikirim."
    );

    contactForm.reset();

});