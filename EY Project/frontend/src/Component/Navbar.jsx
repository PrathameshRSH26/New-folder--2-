import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navigation-wrap">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img id="brandlogo" src="logo.jpg" alt="brand icon" />FOODIES
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/recipes">Explore Recipes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/reviews">Reviews</Link>
            </li>
            <li className="nav-item">
              <Link className="main-btn" to="/login">LOGIN/REGISTER</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;