import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">Star Wars Info</Link>
      {/* Add additional navbar items here */}
    </nav>
  );
};

export default Navbar;
