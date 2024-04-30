import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../logosw.jpeg';
import '../../styles/Common.css'
import Button from './Button';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom d-flex justify-content-between">
      <NavLink className="navbar-brand" to="/">
        <img src={logo} width="80" height="40" alt="Star Wars Logo" />
        Star Wars Data Bank
      </NavLink>
      <div className="navbar-right-container d-flex">
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <Button className="nav-link dropdown-toggle" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
              Browse
            </Button>
            <div className="dropdown-menu">
              <NavLink className="dropdown-item" to="/all">All</NavLink>
              <NavLink className="dropdown-item" to="/people">People</NavLink>
              <NavLink className="dropdown-item" to="/vehicles">Vehicles</NavLink>
              <NavLink className="dropdown-item" to="/planets">Planets</NavLink>
            </div>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0 ml-auto">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <Button className="btn-outline-success my-2 my-sm-0" type="submit">Search</Button>
        </form>
        <Button className="btn-primary ml-2">Favorites</Button>
      </div>
    </nav>
  );
};


export default Navbar;
