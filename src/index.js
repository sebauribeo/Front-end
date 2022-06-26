import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './home/Home'
import reportWebVitals from './reportWebVitals';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './products/Products';
import NavBar from './nav/NavBar';
import Footer from './footer/Footer';
import Shoppingcart from './ShoppingCart/Shoppingcart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<Home />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/cart' element={<Shoppingcart />}/>
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);

reportWebVitals();