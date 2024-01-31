import React from "react";
import "../css files/Header.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg custom_nav-container mynav">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Anonymous
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-black" href="/services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black" href="/testimonials">
                Testimonials
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black" href="/about">
                About Us
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-black"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Login
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/login">
                  Login as a User
                </a>
                <a className="dropdown-item" href="/login/service-provider">
                  Login as a Service Provider
                </a>
              </div>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="btn btn-outline-primary nav-item signup"
                style={{ border: "1px solid blue" }}
              >
                <a
                  href="/register"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Sign Up
                </a>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
