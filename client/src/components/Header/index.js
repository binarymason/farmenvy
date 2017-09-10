import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './style.css';

const Header = () => (
  <header>
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>

    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/nowhere'>foo</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header;
