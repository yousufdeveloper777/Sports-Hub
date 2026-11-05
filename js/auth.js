/* ============================================
   SPORTSHUB - AUTH (Demo localStorage-based)
   ============================================ */

const Auth = {
  USER_KEY: "sportshub_user",
  USERS_KEY: "sportshub_users",

  getUsers() {
    return JSON.parse(localStorage.getItem(this.USERS_KEY) || "[]");
  },

  saveUsers(users) {
    localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
  },

  current() {
    return JSON.parse(localStorage.getItem(this.USER_KEY) || "null");
  },

  signup(name, email, password) {
    const users = this.getUsers();
    if (users.find(u => u.email === email)) {
      return { success: false, error: "Email already registered" };
    }
    const user = { id: Date.now(), name, email, password, joined: new Date().toISOString() };
    users.push(user);
    this.saveUsers(users);
    localStorage.setItem(this.USER_KEY, JSON.stringify({ id: user.id, name, email }));
    return { success: true, user };
  },

  login(email, password) {
    const users = this.getUsers();
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) return { success: false, error: "Invalid credentials" };
    localStorage.setItem(this.USER_KEY, JSON.stringify({ id: user.id, name: user.name, email }));
    return { success: true, user };
  },

  logout() {
    localStorage.removeItem(this.USER_KEY);
    window.location.href = "login.html";
  },

  isLoggedIn() {
    return !!this.current();
  }
};

window.Auth = Auth;