/* ============================================
   SPORTSHUB - ADMIN PANEL LOGIC
   ============================================ */

const Admin = {
  /* Simple stats */
  stats() {
    const orders = JSON.parse(localStorage.getItem("sportshub_orders") || "[]");
    const users = Auth.getUsers();
    const products = window.PRODUCTS || [];

    return {
      totalOrders: orders.length,
      totalUsers: users.length,
      totalProducts: products.length,
      revenue: orders.reduce((s, o) => s + (o.total || 0), 0)
    };
  },

  /* Render stats cards */
  renderStats(targetId) {
    const el = document.getElementById(targetId);
    if (!el) return;
    const s = this.stats();
    el.innerHTML = `
      <div class="stat-card">
        <h3>${s.totalOrders}</h3>
        <p>Total Orders</p>
      </div>
      <div class="stat-card">
        <h3>${s.totalUsers}</h3>
        <p>Users</p>
      </div>
      <div class="stat-card">
        <h3>${s.totalProducts}</h3>
        <p>Products</p>
      </div>
      <div class="stat-card">
        <h3>Rs. ${s.revenue.toLocaleString()}</h3>
        <p>Revenue</p>
      </div>
    `;
  },

  /* Render products table */
  renderProductsTable(targetId) {
    const el = document.getElementById(targetId);
    if (!el) return;
    const products = window.PRODUCTS || [];
    el.innerHTML = products.map(p => `
      <tr>
        <td>${p.id}</td>
        <td>${p.emoji} ${p.title}</td>
        <td>${p.sport}</td>
        <td>${p.brand}</td>
        <td>Rs. ${p.price.toLocaleString()}</td>
        <td>${p.stock}</td>
      </tr>
    `).join("");
  }
};

window.Admin = Admin;