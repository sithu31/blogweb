'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import '../../globals.css';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    const validUsername = 'admin';
    const validPassword = 'admin123';

    if (username === validUsername && password === validPassword) {
      localStorage.setItem('loggedInUser', 'admin');
      alert('Admin Login Successful');
      router.push('/admin-dashboard'); // ✅ Go to dashboard
    } else {
      alert('Invalid admin credentials');
    }
  };

  useEffect(() => {
    const user = localStorage.getItem('loggedInUser');
    if (user === 'admin') {
      router.push('/admin');
    }
  }, []);

  return (
    <div className="login-container">
      <h1 className="user-login-title">Admin Login</h1>
      <form onSubmit={handleLogin} className="user-login-form">
        <div className="user-input-group">
          <label htmlFor="admin-username">Username</label>
          <input
            id="admin-username"
            type="text"
            placeholder="Enter admin username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="user-input-group">
          <label htmlFor="admin-password">Password</label>
          <input
            id="admin-password"
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="user-login-button"
          disabled={!username || !password}
        >
          Login
        </button>
      </form>
    </div>
  );
}
