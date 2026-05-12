function showWelcome() {
    alert("Bienvenue dans notre boutique ! La collection Été arrive bientôt.");
}
const logo = document.querySelector('.logo');
logo.addEventListener('mouseover', () => {
    logo.style.letterSpacing = "6px";
    logo.style.transition = "0.5s";
});

logo.addEventListener('mouseout', () => {
    logo.style.letterSpacing = "3px";
});
