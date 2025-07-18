'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import BlogList from './Components/BlogList';
import './globals.css';

const blogs = [
  {
    slug: 'money-heist-s1-e1',
    title: 'Money Heist - Season 1 Episode 1',
    image: '/mh.1.jpg',
    summary: 'The Professor recruits 8 criminals to rob the Royal Mint of Spain.',
  },
  {
    slug: 'money-heist-s1-e2',
    title: 'Money Heist - Season 1 Episode 2',
    image: '/mh.2.jpg',
    summary: 'Tensions grow as the team holds hostages and Raquel negotiates.',
  },
  {
    slug: 'money-heist-s1-e3',
    title: 'Money Heist - Season 1 Episode 3',
    image: '/mh.3.jpg',
    summary: 'Berlin takes charge as internal friction starts to show.',
  },
  {
    slug: 'money-heist-s1-e4',
    title: 'Money Heist - Season 1 Episode 4',
    image: '/mh.4.jpeg',
    summary: 'The Professor’s identity is at risk while police close in.',
  },
  {
    slug: 'money-heist-s1-e5',
    title: 'Money Heist - Season 1 Episode 5',
    image: '/mh.5.jpg',
    summary: 'Tokyo causes chaos and Raquel grows suspicious of Salva.',
  },
  {
    slug: 'money-heist-s1-e6',
    title: 'Money Heist - Season 1 Episode 6',
    image: '/mh.6.jpg',
    summary: 'Denver faces a dilemma while trust begins to break.',
  },
  {
    slug: 'money-heist-s1-e7',
    title: 'Money Heist - Season 1 Episode 7',
    image: '/mh.7.jpg',
    summary: 'The Professor manipulates the police. Arturo plans a revolt.',
  },
  {
    slug: 'money-heist-s1-e8',
    title: 'Money Heist - Season 1 Episode 8',
    image: '/mh.8.jpg',
    summary: 'A standoff escalates. The crew starts losing control.',
  },
  {
    slug: 'money-heist-s1-e9',
    title: 'Money Heist - Season 1 Episode 9',
    image: '/mh.9.jpg',
    summary: 'Hostages revolt. Raquel finds new leads.',
  },
  {
    slug: 'money-heist-s1-e10',
    title: 'Money Heist - Season 1 Episode 10',
    image: '/mh.10.jpg',
    summary: 'Tokyo is out. The Professor plans her return.',
  },
  {
    slug: 'money-heist-s1-e11',
    title: 'Money Heist - Season 1 Episode 11',
    image: '/mh.11.jpg',
    summary: 'Berlin’s backstory surfaces. Loyalties are tested.',
  },
  {
    slug: 'money-heist-s1-e12',
    title: 'Money Heist - Season 1 Episode 12',
    image: '/mh.12.jpg',
    summary: 'Raquel faces tough choices between love and law.',
  },
  {
    slug: 'money-heist-s1-e13',
    title: 'Money Heist - Season 1 Episode 13',
    image: '/mh.13.jpg',
    summary: 'A betrayal changes everything inside the Mint.',
  },
  {
    slug: 'money-heist-s1-e14',
    title: 'Money Heist - Season 1 Episode 14',
    image: '/mh.14.jpg',
    summary: 'A final attack looms. Time runs out.',
  },
  {
    slug: 'money-heist-s1-e15',
    title: 'Money Heist - Season 1 Episode 15',
    image: '/mh.15.jpg',
    summary: 'The heist reaches its climax. Who escapes?',
  },
];

export default function Home() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('blogs');
    if (!stored) {
      localStorage.setItem('blogs', JSON.stringify(blogs));
    }

    const user = localStorage.getItem('loggedInUser');
    if (user) {
      setIsLoggedIn(true);
      setUserType(user);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setIsLoggedIn(false);
    setUserType('');
    router.push('/');
  };

  return (
    <div className="container">
      <div className="header">
        <h1 className="site-title"></h1>
        <h2 className="site-subtitle">🎬 MONEY HEIST</h2>
        <p className="site-description">A thrilling heist drama that keeps you on the edge of your seat.</p>

        <div className="login-buttons">
          {isLoggedIn ? (
            <>
              <span className="welcome">Logged in as: {userType}</span>
              <button className="btn logout" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <button className="btn" onClick={() => router.push('/login/user')}>User Login</button>
              <button className="btn admin" onClick={() => router.push('/login/admin')}>Admin Login</button>
            </>
          )}
        </div>
      </div>

      <BlogList blogs={blogs} />
    </div>
  );
}