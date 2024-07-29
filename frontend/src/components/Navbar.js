import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/plans">Plans</Link></li>
        <li><Link to="/affirmations">Affirmations</Link></li>
        <li><Link to="/unified-view">Unified View</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;