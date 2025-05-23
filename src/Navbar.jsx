// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="sticky-top bg-white" style={{ zIndex: 999 }}>
      <nav className="navbar navbar-expand-lg bg-white container">
        <Link className="navbar-brand ms-3" to="/">
          <img
            src="https://candbc.com/assets/client/image/Logo.png"
            alt="logo"
            className="d-inline-block align-text-top"
            style={{ width: "56px" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-gray px-3" to="/">Home</Link>
            </li>

            {/* About Us Link + Dropdown */}
           <li className="nav-item dropdown">
  <a
    className="nav-link dropdown-toggle px-3"
    href="#"
    id="aboutDropdown"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    About Us
  </a>
  <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
    <li>
      <Link className="dropdown-item " style={{backgroundColor:"red" , color:"white"}} to="/about">About</Link>
    </li>
    <li>
      <Link className="dropdown-item" to="/about/culture">Culture</Link>
    </li>
    <li>
      <Link className="dropdown-item" to="/about/careers">Careers</Link>
    </li>
    <li>
      <Link className="dropdown-item" to="/about/csr">CSR</Link>
    </li>
    <li>
      <Link className="dropdown-item" to="/about/supplier-qualification">Supplier Qualification</Link>
    </li>
  </ul>
</li>


            <li className="nav-item">
              <a className="nav-link px-3" href="#">Career</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="#">Sustainability</a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle px-3"
                href="#"
                id="manufacturingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Manufacturing
              </a>
              <ul className="dropdown-menu" aria-labelledby="manufacturingDropdown">
                <li><a className="dropdown-item" href="#">Engineering Components</a></li>
                <li><a className="dropdown-item" href="#">Stator Frame Components</a></li>
                <li><a className="dropdown-item" href="#">Valve Components</a></li>
                <li><a className="dropdown-item" href="#">Pumps</a></li>
                <li><a className="dropdown-item" href="#">Pump Castings</a></li>
                <li><a className="dropdown-item" href="#">Gearbox Components</a></li>
                <li><a className="dropdown-item" href="#">Automobile Components</a></li>
                <li><a className="dropdown-item" href="#">Brake Drums</a></li>
                <li><a className="dropdown-item" href="#">Other Components</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="#">Contact us</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
