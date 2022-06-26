import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Products.css";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [ids, setIds] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/products")
      .then((res) => setProducts(res.data.response));
  }, []);

  const handleClick = async () => {
    const postcart = products.find((item) => item.id === ids);
    console.log(postcart);
    const body = {
      nombre: postcart.nombre,
      precio: postcart.precio,
      imagen: postcart.imagen,
    };
    const response = await axios.post(
      "http://localhost:3001/shoppingCart/addProducts",
      body
    );
    console.log(response.config.data);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          {products.map((item) => (
            <div
              className="card col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 text-center mt-3"
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
                  className="btn btn-primary"
                  onClick={() => {
                    setIds(item.id);
                    handleClick();
                  }}
                >
                  Agregar al carrito
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
