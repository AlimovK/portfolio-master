import React from "react";

import "./style.css";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light Main">
      <div className="container">
        <a className="navbar-brand" href="#">
          logo
        </a>
        <button
          className="navbar-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Education
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                contact me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
