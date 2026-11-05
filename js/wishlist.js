/* ============================================
   SPORTSHUB - WISHLIST LOGIC
   ============================================ */

const Wishlist = {
  KEY: "sportshub_wishlist",

  get() {
    return JSON.parse(localStorage.getItem(this.KEY) || "[]");
  },

  save(list) {
    localStorage.setItem(this.KEY, JSON.stringify(list));
    window.dispatchEvent(new Event("wishlistUpdated"));
  },

  add(productId) {
    const list = this.get();
    if (!list.includes(productId)) {
      list.push(productId);
      this.save(list);
    }
  },

  remove(productId) {
    const list = this.get().filter(id => id !== productId);
    this.save(list);
  },

  toggle(productId) {
    if (this.has(productId)) {
      this.remove(productId);
      return false;
    } else {
      this.add(productId);
      return true;
    }
  },

  has(productId) {
    return this.get().includes(productId);
  },

  count() {
    return this.get().length;
  }
};

window.Wishlist = Wishlist;