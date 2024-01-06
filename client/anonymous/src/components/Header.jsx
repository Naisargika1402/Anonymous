import React from "react";
import "../css files/Header.css";

function Header() {
  return (
    <nav class="navbar navbar-expand-lg custom_nav-container mynav">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          Anonymous
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a className="nav-link text-black" href="/services">
                Services
              </a>
            </li>
            <li class="nav-item">
              <a className="nav-link text-black" href="/about">
                About Us
              </a>
            </li>
            <button
              type="button"
              className="nav-item signup btn btn-outline-primary"
              style={{ color: "black", border: "1px solid blue" }}
            >
              <a
                href="/login"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Login
              </a>
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
