import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Products.css";
import Swal from "sweetalert2";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/products")
      .then((res) => setProducts(res.data.response));
  }, []);

  const addShoppingCart = async (id) => {
    Swal.fire({
      icon: 'success',
      title: 'Producto agregado al carro de compras',
      showConfirmButton: false,
      timer: 1000
    })
    const value = parseInt(id.target.value);
    const postcart = products.find((item) => item.id === value);
    const body = {
      nombre: postcart.nombre,
      precio: postcart.precio,
      contador: 1,
      imagen: postcart.imagen,
    };
    await axios.post("http://localhost:3001/shoppingCart/addProducts", body);
  };

  return (
    <>
      <div className="container">
        
        <div className="row mt-5">
          {products.map((item) => (
            <div
              className="card col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 text-center my-2"
              key={item.id}
            >
              <img
                src={item.imagen}
                className="card-img-top imagen"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title">{item.nombre}</h5>
                <p className="card-text">{item.marca}</p>
                <p className="card-text">{item.detalle}</p>
                <h4 className="card-text">$ {item.precio}</h4>
                <button
                  className="btn btn-success bi bi-cart-fill w-50"                  
                  value={item.id}
                  onClick={addShoppingCart}
                >
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
