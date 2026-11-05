/* ============================================
   SPORTSHUB - MAIN SCRIPT (runs on every page)
   ============================================ */

/* ============ DARK MODE ============ */
const DarkMode = {
  KEY: "sportshub_dark",

  init() {
    if (localStorage.getItem(this.KEY) === "1") {
      document.body.classList.add("dark-mode");
    }
    this.attachToggle();
  },

  attachToggle() {
    const btn = document.getElementById("darkToggle");
    if (!btn) return;
    btn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
    btn.addEventListener("click", () => this.toggle());
  },

  toggle() {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem(this.KEY, isDark ? "1" : "0");
    const btn = document.getElementById("darkToggle");
    if (btn) btn.textContent = isDark ? "☀️" : "🌙";
  }
};

/* ============ TOAST ============ */
function showToast(message, duration = 2500) {
  const t = document.createElement("div");
  t.className = "toast";
  t.textContent = message;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), duration);
}

/* ============ CART MODAL ============ */
const CartModal = {
  init() {
    const cartBtn = document.getElementById("cartButton");
    const modal = document.getElementById("cartModal");
    const closeBtn = document.getElementById("closeModal");
    if (!modal) return;

    cartBtn?.addEventListener("click", () => this.open());
    closeBtn?.addEventListener("click", () => this.close());
    modal.addEventListener("click", (e) => {
      if (e.target === modal) this.close();
    });
  },

  open() {
    const modal = document.getElementById("cartModal");
    if (!modal) return;
    this.render();
    modal.classList.add("open");
  },

  close() {
    document.getElementById("cartModal")?.classList.remove("open");
  },

  render() {
    const items = document.getElementById("cartItems");
    const totalEl = document.getElementById("cartTotal");
    if (!items) return;

    const cart = Cart.get();
    const products = window.PRODUCTS || [];

    if (!cart.length) {
      items.innerHTML = '<p class="empty-cart">Your cart is empty. 🛒</p>';
      if (totalEl) totalEl.textContent = "Rs. 0";
      return;
    }

    items.innerHTML = cart.map(item => {
      const p = products.find(x => x.id === item.id);
      if (!p) return "";
      return `
        <div class="cart-item" style="display:flex;gap:1rem;align-items:center;padding:0.7rem 0;border-bottom:1px solid var(--border);">
          <span style="font-size:2rem;">${p.emoji}</span>
          <div style="flex:1;">
            <div style="font-weight:600;font-size:0.9rem;">${p.title}</div>
            <div style="font-size:0.85rem;color:var(--text-muted);">Qty: ${item.qty} × Rs. ${p.price.toLocaleString()}</div>
          </div>
          <button onclick="Cart.remove(${p.id}); CartModal.render();" style="background:none;border:none;color:var(--danger);cursor:pointer;font-size:1.2rem;">🗑️</button>
        </div>
      `;
    }).join("");

    if (totalEl) totalEl.textContent = "Rs. " + Cart.total().toLocaleString();
  }
};

/* ============ PRODUCT CARD TEMPLATE ============ */
function renderProductCard(p) {
  const isWished = Wishlist.has(p.id);
  const discount = p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;
  return `
    <div class="product-card" data-id="${p.id}">
      <div class="product-image">
        ${p.badge === "sale" ? `<span class="badge">🔥 -${discount}%</span>` : ""}
        ${p.badge === "new" ? `<span class="badge new">NEW</span>` : ""}
        <button class="wishlist-btn ${isWished ? "active" : ""}" data-wish="${p.id}">
          ${isWished ? "❤️" : "🤍"}
        </button>
        <span>${p.emoji}</span>
      </div>
      <div class="product-info">
        <span class="product-sport">${p.sport}</span>
        <h3 class="product-title">${p.title}</h3>
        <div class="product-rating">⭐ ${p.rating} <span>(${p.reviews})</span></div>
        <div class="product-price">
          <span class="price-current">Rs. ${p.price.toLocaleString()}</span>
          ${p.oldPrice ? `<span class="price-old">Rs. ${p.oldPrice.toLocaleString()}</span>` : ""}
        </div>
        <button class="add-cart-btn" data-add="${p.id}">Add to Cart</button>
      </div>
    </div>
  `;
}

/* ============ ATTACH GLOBAL EVENTS ============ */
/* ============ ATTACH GLOBAL EVENTS (SAFE - NO DOUBLE) ============ */
/* ============ ATTACH GLOBAL EVENTS (SAFE - NO DOUBLE) ============ */
function attachGlobalProductEvents(scope = document) {
  scope.querySelectorAll("[data-add]").forEach(btn => {
    // 🛡️ Guard: agar pehle se attached hai to skip karo
    if (btn.dataset.listenerAttached === "true") return;
    btn.dataset.listenerAttached = "true";
    
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      e.preventDefault(); // 🛡️ Form submit rokne ke liye
      Cart.add(+btn.dataset.add);
      showToast("✅ Added to cart!");
    });
  });

  scope.querySelectorAll("[data-wish]").forEach(btn => {
    if (btn.dataset.listenerAttached === "true") return;
    btn.dataset.listenerAttached = "true";
    
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      e.preventDefault();
      const id = +btn.dataset.wish;
      const added = Wishlist.toggle(id);
      btn.classList.toggle("active", added);
      btn.textContent = added ? "❤️" : "🤍";
      showToast(added ? "❤️ Added to wishlist" : "💔 Removed from wishlist");
    });
  });
}

/* ============ INIT ON EVERY PAGE ============ */
document.addEventListener("DOMContentLoaded", () => {
  DarkMode.init();
  CartModal.init();
  Cart.updateBadge();
  attachGlobalProductEvents();
});