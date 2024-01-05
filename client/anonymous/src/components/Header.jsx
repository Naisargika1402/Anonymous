import React from "react";
import "./Header.css";

function Header() {
  return (
    <nav class="navbar navbar-expand-lg custom_nav-container mynav">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
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
            <li class="nav-item">Services</li>
            <li class="nav-item">About Us</li>
            <li class="nav-item">Contact Us</li>
            <button
              type="button"
              class="nav-item signup btn btn-outline-primary"
            >
              Sign Up
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
