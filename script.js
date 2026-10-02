// Mobile navigation
const menuButton = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
});

// Close mobile menu after clicking a link
document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// Simple Caesar cipher demo
const demoButton = document.getElementById("demo-btn");
const demoOutput = document.getElementById("demo-output");

demoButton.addEventListener("click", () => {
    const text = "KHOOR";
    const shift = 3;

    let decoded = "";

    for (const char of text) {
        if (char >= "A" && char <= "Z") {
            const code = char.charCodeAt(0) - 65;
            decoded += String.fromCharCode((code - shift + 26) % 26 + 65);
        } else {
            decoded += char;
        }
    }

    demoOutput.textContent = `Demo: "${text}" decoded with shift ${shift} → "${decoded}"`;
});

// Contact interaction
const helloButton = document.getElementById("hello-btn");
const helloMessage = document.getElementById("hello-message");

helloButton.addEventListener("click", () => {
    helloMessage.textContent = "Thanks for visiting my portfolio! 👋";
});
