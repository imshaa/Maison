import React from "react";
import { Component } from "react";
import { Link, useNavigate } from "react-router-dom";

const ScrolltoSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
        <Link
          className="navbar-brand brand-logo d-flex align-items-center"
          to="/"
        >
          <span className="brand-main">Maison</span>
          <span className="brand-dot">.</span>
        </Link>

        {/* Mobile toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMain"
          aria-controls="navbarMain"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible content */}
        <div className="collapse navbar-collapse" id="navbarMain">
          {/* Left links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Men
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Women
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Electronics
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sales
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
                onClick={() => setTimeout(() => ScrolltoSection("about"), 100)}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
                onClick={() =>
                  setTimeout(() => ScrolltoSection("contact"), 100)
                }
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Search bar */}
          <form className="d-flex me-3" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search products..."
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>

          {/* Cart & Login */}
          <Link
            className="btn btn-outline-light me-2 position-relative"
            to="/cart"
          >
            🛒 Cart
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              3
            </span>
          </Link>
          <Link className="btn btn-warning text-dark fw-semibold" to="/auth">
            Login
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
