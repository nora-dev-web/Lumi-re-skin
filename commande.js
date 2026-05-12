function commander(nom, prix, image, page) {
    localStorage.setItem('lastProductNom', nom);
    localStorage.setItem('lastProductPrix', prix);
    localStorage.setItem('lastProductImg', image);
    window.location.href = page; 
}

document.addEventListener("DOMContentLoaded", () => {
    

    updateCartDisplay();

    
    const btnOrder = document.querySelector('.btn-order');
    if (btnOrder) {
        btnOrder.addEventListener('click', function(event) {
            event.preventDefault(); 
            
    
            const nom = localStorage.getItem('lastProductNom') || "Produit Lumière";
            const prixTexte = localStorage.getItem('lastProductPrix') || "0 DA";
            
            
            const qteInput = document.querySelector('input[type="number"]');
            const quantite = qteInput ? parseInt(qteInput.value) : 1;
            let prixUnitaire = parseInt(prixTexte.replace(/\D/g, '')) || 0;
            let prixTotalCalcule = prixUnitaire * quantite;

           
            let panier = JSON.parse(localStorage.getItem('monPanier')) || [];
            
           
            panier.push({ 
                name: nom, 
                price: prixTotalCalcule + " DA", 
                unitPrice: prixUnitaire,
                quantite: quantite 
            });

           
            localStorage.setItem('monPanier', JSON.stringify(panier));
            localStorage.setItem('cartCount', panier.length);

            updateCartDisplay();

            alert(`Merci ! l'achat ajouté au panier. ✅`);
            window.location.href = "shop.html"; 
        });
    }

    
    if (window.location.pathname.includes("panier.html")) {
        renderPanier();
    }

    if (document.getElementById('checkout-items')) {
        renderCheckout();
    }
});


function updateCartDisplay() {
    const panier = JSON.parse(localStorage.getItem('monPanier')) || [];
    const count = panier.length;
    const countElement = document.getElementById('cart-count');
    if (countElement) {
        countElement.innerText = count;
        countElement.style.display = count > 0 ? "block" : "none";
    }
}


function renderPanier() {
    const panier = JSON.parse(localStorage.getItem('monPanier')) || [];
    const contentDiv = document.getElementById('cart-content');
    const totalPriceSpan = document.getElementById('total-price');
    
    let html = "";
    let total = 0;

    if (panier.length > 0) {
        panier.forEach((item, index) => {
            let numericPrice = parseInt(item.price.replace(/\D/g, '')) || 0;
            total += numericPrice;
            html += `
                <div class="cart-item" style="display:flex; justify-content:space-between; align-items:center; padding:15px; border-bottom:1px solid #eee;">
                    <div>
                        <strong style="display:block;">${item.name}</strong>
                        <small>Quantité: ${item.quantite}</small>
                    </div>
                    <span style="font-weight:600;">${item.price}</span>
                </div>`;
        });
        contentDiv.innerHTML = html;
    } else {
        contentDiv.innerHTML = "<p style='text-align:center; padding:20px;'>Votre panier est vide. 🌿</p>";
    }

    if (totalPriceSpan) totalPriceSpan.innerText = total + " DA";
}


function renderCheckout() {
    const panier = JSON.parse(localStorage.getItem('monPanier')) || [];
    const itemsDiv = document.getElementById('checkout-items');
    const totalSpan = document.getElementById('checkout-total');
    const subtotalSpan = document.getElementById('subtotal');

    let total = 0;
    let html = "";

    panier.forEach(item => {
        let price = parseInt(item.price.replace(/\D/g, '')) || 0;
        total += price;
        html += `
            <div style="display:flex; justify-content:space-between; margin-bottom:15px; border-bottom: 1px solid #f9f9f9; padding-bottom:5px;">
                <span>${item.name} (x${item.quantite})</span>
                <strong>${item.price}</strong>
            </div>`;
    });

    itemsDiv.innerHTML = html || "<p>Panier vide</p>";
    if(totalSpan) totalSpan.innerText = total + " DA";
    if(subtotalSpan) subtotalSpan.innerText = total + " DA";
}


function clearCart() {
    if (confirm("Voulez-vous vider votre panier ?")) {
        localStorage.removeItem('monPanier');
        localStorage.removeItem('cartCount');
        window.location.reload();
    }
}


function filterProducts() {
    let input = document.getElementById('search-input').value.toLowerCase();
    let products = document.getElementsByClassName('product-card');

    for (let i = 0; i < products.length; i++) {
        let title = products[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
        products[i].style.display = title.includes(input) ? "" : "none";
    }
}
const listePages = [
    "commandep1.html",
    "commandep2.html",
    "commandep3.html",
    "commandep4.html",
    "commandep5.html",
    "commandep6.html",
    "commandep7.html",
    "commandep8.html",
    "commandep9.html",
    "commandep10.html",
    "commandep11.html",
    "commandep12.html",
    "commandep13.html",
    "commandep14.html",
    "commandep15.html",
    "commandep16.html",
    "commandep17.html",
    "commandep18.html",
    "commandep19.html",
    "commandep20.html",
    "commandep21.html",
    "commandep22.html",
    "commandep23.html",
    "commandep24.html",
    "commandep25.html",
    "commandep26.html",
    "commandep27.html",
    "commandep28.html",
    "commandep29.html",
    "commandep30.html",
];


function navigateProduct(direction) {
   
    let path = window.location.pathname;
    let currentPage = path.substring(path.lastIndexOf("/") + 1);
    
   
    if (currentPage === "") currentPage = "commande1.html";

   
    let currentIndex = listePages.indexOf(currentPage);

    
    if (currentIndex !== -1) {
        let nextIndex = currentIndex + direction;

       
        if (nextIndex >= listePages.length) {
            window.location.href = listePages[0]; 
        } else if (nextIndex < 0) {
            window.location.href = listePages[listePages.length - 1];
        } else {
            window.location.href = listePages[nextIndex];
        }
    } else {
        
        console.error("La page actuelle n'est pas dans la liste des 30 produits.");
    }
}