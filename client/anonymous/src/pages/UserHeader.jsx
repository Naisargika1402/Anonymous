import React, { useEffect, useRef, useState } from "react";
import { Search, GpsFixed } from "@material-ui/icons";
import "../css files/Header.css";
import "../css files/UserHeader.css";

const UserHeader = ({ searchInput, findMyLocation }) => {
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
            <li className="nav-item">
              <a className="nav-link text-black" href="/testimonials">
                Bookings
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black" href="/getUserDetails">
                Your Profile
              </a>
            </li>
            <li className="nav-item">
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
