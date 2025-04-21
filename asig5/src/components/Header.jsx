import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      {/* Logo links to home */}
      <Link to="/" className="logo">
        <img src="/images/logo.png" alt="Logo" />
      </Link>

      <div className="header-buttons">
        <button onClick={() => navigate('/login')}>Login</button>
        <button onClick={() => navigate('/register')}>Register</button>
      </div>
    </header>
  );
};

export default Header;
