import React, { useEffect, useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [number, setNumber] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/shoppingCart")
      .then((res) => res.json())
      .then((result) => {
        setNumber(result.response);
      });
  }, []);

  let value = number ? number.length: 0;
 
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              src="https://storage.googleapis.com/liquidos-public/logo-liquidos.webp"
              className="imgNav"
              alt="..."
            ></img>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active fs-4 mt-2" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active fs-4 mt-2"
                  aria-current="page"
                  href="/products"
                >
                  Productos
                </a>
              </li>
              <li className="nav-item cart">
                <a
                  className="btn btn-light text-dark position-relative nav-link active bi bi-cart4 fs-3 rounded-4"
                  href="/cart"
                >
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {value}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;