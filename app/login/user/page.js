'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import '../../globals.css';

export default function UserLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    const validUsername = 'user';
    const validPassword = '1234';

    if (username === validUsername && password === validPassword) {
      localStorage.setItem('loggedInUser', 'user');
      alert('User Login Successful');
      router.push('/');
    } else {
      alert('Invalid credentials');
    }
  };

  useEffect(() => {
    const user = localStorage.getItem('loggedInUser');
    if (user === 'user') {
      router.push('/');
    }
  }, []);

  return (
    <div className="login-container">
      <h1 className="user-login-title">User Login</h1>
      <form onSubmit={handleLogin} className="user-login-form">
        <div className="user-input-group">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="user-input-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter password"
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
