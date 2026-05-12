document.addEventListener("DOMContentLoaded", () => {
    renderPanier(); 
});

function renderPanier() {
    const panier = JSON.parse(localStorage.getItem('monPanier')) || [];
    const contentDiv = document.getElementById('cart-content');
    const totalPriceSpan = document.getElementById('total-price');
    
    if (!contentDiv) return;

    let html = "";
    let total = 0;

    if (panier.length > 0) {
        panier.forEach((item) => {
            let numericPrice = parseInt(String(item.price).replace(/\D/g, '')) || 0;
            total += numericPrice;
            html += `
                <div class="cart-item" style="display:flex; justify-content:space-between; align-items:center; padding:15px; border-bottom:1px solid #eee;">
                    <div>
                        <strong>${item.name}</strong>
                        <br><small>Quantité: ${item.quantite}</small>
                    </div>
                    <span>${item.price}</span>
                </div>`;
        });
        contentDiv.innerHTML = html;
    } else {
        contentDiv.innerHTML = "<p style='text-align:center; padding:20px;'>Votre panier est vide. 🌿</p>";
    }

    if (totalPriceSpan) totalPriceSpan.innerText = total + " DA";
}

function clearCart() {
    if (confirm("Voulez-vous vider votre panier ?")) {
        localStorage.removeItem('monPanier');
        localStorage.removeItem('cartCount');
        window.location.reload();
    }
}