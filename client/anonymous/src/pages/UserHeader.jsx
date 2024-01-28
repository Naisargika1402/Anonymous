import React, { useEffect, useRef, useState } from "react";
import { Search, GpsFixed } from "@material-ui/icons";
import "../css files/Header.css";
import "../css files/UserHeader.css";

const UserHeader = ({ searchInput, findMyLocation }) => {
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
              <div className="search">
                <span>
                  <Search />
                </span>
                <input
                  ref={searchInput}
                  type="text"
                  placeholder="Search location..."
                />
                <button onClick={findMyLocation}>
                  <GpsFixed />
                </button>
              </div>
            </li>
            <li class="nav-item">
              <a className="nav-link text-black" href="/testimonials">
                Bookings
              </a>
            </li>
            <li class="nav-item">
              <a className="nav-link text-black" href="/getUserDetails">
                Your Profile
              </a>
            </li>
            <li class="nav-item">
              <button
                type="button"
                className="btn btn-outline-primary nav-item signup"
                style={{ border: "1px solid blue" }}
              >
                <a
                  href="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Logout
                </a>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default UserHeader;
