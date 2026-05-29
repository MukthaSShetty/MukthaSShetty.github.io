const roles = [
    "Computer Science Engineer",
    "Java Developer",
    "Frontend Developer",
    "AI Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;

const typingText = document.getElementById("typing-text");

function typeEffect() {

    if (charIndex < roles[roleIndex].length) {

        typingText.textContent += roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 100);

    } else {

        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {

    if (typingText.textContent.length > 0) {

        typingText.textContent =
            typingText.textContent.slice(0, -1);

        setTimeout(eraseEffect, 50);

    } else {

        roleIndex =
            (roleIndex + 1) % roles.length;

        charIndex = 0;

        setTimeout(typeEffect, 300);
    }
}

typeEffect();