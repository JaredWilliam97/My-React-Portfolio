import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Jared William
        </Link>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}

        {/* <div className="collapse navbar-collapse" id="navbarColor02"> */}
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link active" to="/">
              Home
              <span className="visually-hidden">(current)</span>
            </Link>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              href="https://jaredwilliam97.github.io/Portfolio/assets/images/Jared%20W%20Sutch%20Resume.pdf"
              target="_blank"
              rel="noopener
                "
            >
              Resume
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/portfolio">
              Portfolio
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
        </ul>
        {/* <form className="d-flex">
          <input
            className="form-control me-sm-2"
            type="text"
            placeholder="Search"
          />
          <button className="btn btn-secondary my-2 my-sm-0" type="submit">
            Search
          </button>
        </form> */}
      </div>
      {/* </div> */}
    </nav>
  );
}
