import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../CSS/nav.css';

const liLink = (word, hashURL, currentPage, loggedIn, linkClass = '') => {
  let className = '';

  if (hashURL === currentPage) className += 'current';
  if (loggedIn === true) className += ' loggedIn';
  
  return (
    <Link to={hashURL} className={`${className} ${linkClass}`}>
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
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">Running Logistics</Link>
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Running Logistics</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              {liLink("Home", "", currentPage, loggedIn, "mx-lg-2")}
              {liLink("Contact Us", "Contact", currentPage, loggedIn, "mx-lg-2")}
              {liLink("About Us", "About", currentPage, loggedIn, "mx-lg-2")}
              {liLink("Log-In", "Login", currentPage, loggedIn, "mx-lg-2")}
              {liLink("Sign-Up", "Register", currentPage, loggedIn, "mx-lg-2")}
            </ul>

          </div>
        </div>

        <i className="ri-user-line" id="login-btn"></i>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}

export default Nav;
