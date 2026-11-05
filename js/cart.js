/* ============================================
   SPORTSHUB - CART LOGIC
   ============================================ */

const Cart = {
  KEY: "sportshub_cart",

  get() {
    return JSON.parse(localStorage.getItem(this.KEY) || "[]");
  },

  save(cart) {
    localStorage.setItem(this.KEY, JSON.stringify(cart));
    this.updateBadge();
    window.dispatchEvent(new Event("cartUpdated"));
  },

  add(productId, qty = 1) {
    const cart = this.get();
    const item = cart.find(i => i.id === productId);
    if (item) item.qty += qty;
    else cart.push({ id: productId, qty });
    this.save(cart);
    return cart;
  },

  remove(productId) {
    const cart = this.get().filter(i => i.id !== productId);
    this.save(cart);
    return cart;
  },

  updateQty(productId, qty) {
    const cart = this.get();
    const item = cart.find(i => i.id === productId);
    if (item) {
      item.qty = Math.max(1, qty);
      this.save(cart);
    }
    return cart;
  },

  clear() {
    this.save([]);
  },

  total() {
    const cart = this.get();
    return cart.reduce((sum, item) => {
      const p = (window.PRODUCTS || []).find(x => x.id === item.id);
      return sum + (p ? p.price * item.qty : 0);
    }, 0);
  },

  count() {
    return this.get().reduce((s, i) => s + i.qty, 0);
  },

  updateBadge() {
    const badge = document.getElementById("cartCount");
    if (badge) {
      badge.textContent = this.count();
      badge.classList.add("bounce");
      setTimeout(() => badge.classList.remove("bounce"), 500);
    }
  }
};

window.Cart = Cart;