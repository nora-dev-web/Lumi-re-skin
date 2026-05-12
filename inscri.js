document.addEventListener('DOMContentLoaded', () => {
    
    const signupForm = document.querySelector('form');
    const signupBtn = document.querySelector('button[type="submit"]');
    
    const nomInput = document.getElementById('nom');
    const password = document.getElementById('pass');
    const confirmPassword = document.getElementById('conf');

    
    const handleSignup = (event) => {
        event.preventDefault(); 


        if (!nomInput.value || !password.value || !confirmPassword.value) {
            alert("⚠️ Veuillez remplir tous les champs obligatoires.");
            return;
        }

        
        if (password.value !== confirmPassword.value) {
            alert("⚠️ Les mots de passe ne sont pas identiques !");
            password.style.borderColor = "red";
            confirmPassword.style.borderColor = "red";
            return;
        }

        localStorage.setItem('userName', nomInput.value);

    
        alert(`🎉 Inscription réussie ! Bienvenue ${nomInput.value}.`);
    
        window.location.href = "shop.html";
    };

    
    if (signupForm) {
        signupForm.addEventListener('submit', handleSignup);
    }
    
    
    if (signupBtn) {
        signupBtn.addEventListener('click', handleSignup);
    }

    
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.style.borderColor = "#B2AC88";
            input.style.outline = "none";
        });
        input.addEventListener('blur', () => {
            input.style.borderColor = "#ddd";
        });
    });
}); 
