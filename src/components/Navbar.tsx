import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#0a74da' }}>
      <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', margin: 0 }}>
        <li>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        </li>
        <li>
          <Link to="/booking" style={{ color: 'white', textDecoration: 'none' }}>Booking</Link>
        </li>
        <li>
          <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
        </li>
      </ul>
    </nav>
  );
}
