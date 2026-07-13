const Auth = {
  users: JSON.parse(localStorage.getItem('snapplay_users') || '[]'),

  init() {
    const demoEmail = 'demomail0001@gmail.com';
    if (!this.users.find(u => u.email === demoEmail)) {
      this.users.push({
        id: 'demo_001',
        username: 'demouser',
        email: demoEmail,
        password: 'Demomail0001',
        role: 'customer',
        created_at: new Date().toISOString()
      });
      this.save();
    }
  },

  save() {
    localStorage.setItem('snapplay_users', JSON.stringify(this.users));
  },

  register(username, email, password) {
    if (this.users.find(u => u.email === email)) {
      return { success: false, message: 'อีเมลนี้มีผู้ใช้แล้ว' };
    }
    if (this.users.find(u => u.username === username)) {
      return { success: false, message: 'ชื่อผู้ใช้นี้มีแล้ว' };
    }
    const user = {
      id: Date.now().toString(),
      username, email, password,
      role: 'customer',
      created_at: new Date().toISOString()
    };
    this.users.push(user);
    this.save();
    return { success: true, user };
  },

  login(email, password) {
    const user = this.users.find(u => u.email === email && u.password === password);
    if (!user) {
      return { success: false, message: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง' };
    }
    localStorage.setItem('snappplay_user', JSON.stringify(user));
    return { success: true, user };
  },

  logout() {
    localStorage.removeItem('snappplay_user');
  },

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('snappplay_user') || 'null');
  },

  isLoggedIn() {
    return !!this.getCurrentUser();
  }
};

Auth.init();
