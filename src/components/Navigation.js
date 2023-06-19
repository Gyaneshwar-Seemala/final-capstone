import React from 'react';

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="index.html">
          <img
            src="Asset 16@4x.png"
            alt="Little lemon"
            className="img-fluid"
            height={50}
            width={240}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="index.html" style={{ fontWeight: 800 }}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="About.html" style={{ fontWeight: 800 }}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Menu.html" style={{ fontWeight: 800 }}>
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Reserve.html" style={{ fontWeight: 800 }}>
                Reservation
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Order.html" style={{ fontWeight: 800 }}>
                Order online
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Login.html" style={{ fontWeight: 800 }}>
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
