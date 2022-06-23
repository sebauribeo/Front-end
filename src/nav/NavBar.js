import React from 'react'
import './NavBar.css';

const NavBar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
            <a className="navbar-brand" href="/">
                <img src="https://storage.googleapis.com/liquidos-public/logo-liquidos.webp" class="imgNav" alt="..."></img>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/products">Productos</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="cart"><i className="bi bi-cart-fill text-danger h3"></i></a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </>
  )
}

export default NavBar