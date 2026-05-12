const toggleLink = document.getElementById('toggle-auth');
const authTitle = document.getElementById('auth-title');
const nameField = document.getElementById('name-field');
const switchMsg = document.getElementById('switch-msg');

let isLogin = true;

if (toggleLink) {
    toggleLink.addEventListener('click', (e) => {
        e.preventDefault();
        isLogin = !isLogin;

        if (isLogin) {
            authTitle.innerText = "Connexion";
            nameField.style.display = "none";
            switchMsg.innerText = "Pas encore de compte ?";
            toggleLink.innerText = "S'inscrire";
        } else {
            authTitle.innerText = "Inscription";
            nameField.style.display = "block";
            switchMsg.innerText = "Déjà un compte ?";
            toggleLink.innerText = "Se connecter";
        }
    });
}


const authForm = document.getElementById('auth-form');
if (authForm) {
    authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        alert("Succès ! Bienvenue " + email + ". Redirection vers la boutique...");
        window.location.href = "index.html"; 
    });
}


document.addEventListener('DOMContentLoaded', () => {

    const authForm = document.querySelector('form');

    if (authForm) {
        authForm.addEventListener('submit', function(event) {
        
            event.preventDefault();

        
            alert("Bienvenue chez Lumière Skin!! heureux de vous revoir");

            window.location.href = "shop.html";
        });
    }
});