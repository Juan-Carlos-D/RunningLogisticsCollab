import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../CSS/nav.css';

const liLink = (word, hashURL, currentPage, loggedIn) => {
  let className = '';

  if (hashURL === currentPage) className += 'current';
  if (loggedIn === true) className += ' loggedIn';
  return (
    <Link to={hashURL} className={className}>
      <li>
        {word}
      </li>
    </Link>
  );
};

function Nav({ profile }) {
  const location = useLocation();
  const currentPage = location.pathname.slice(1);
  const loggedIn = (profile === '') ? false : true;

  return (
    <nav className="navbar bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">Running Logistics</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Running Logistics</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              {liLink("Home", "", currentPage)}
              {liLink("Contact Us", "Contact", currentPage)}
              {liLink("About Us", "About", currentPage)}
              {liLink("Log-In", "Login", currentPage, loggedIn)}
              {liLink("Sign-Up", "Register", currentPage, loggedIn)}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="#">Action</Link></li>
                  <li><Link className="dropdown-item" to="#">Another action</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex mt-3" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
