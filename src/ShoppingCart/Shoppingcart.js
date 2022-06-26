import React, { useEffect, useState } from "react";
import "../ShoppingCart/ShoppingCart.css";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Shoppingcart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/shoppingCart")
      .then((res) => res.json())
      .then((result) => {
        setCart(result.response);
      });
  }, []);

  const price = cart.map(precio => precio.precio);
  const totalPrice = price.length > 0 ? price.reduce((a, b )=> a + b): ''
  const navigate = useNavigate();
  const swalWithBootstrapButtons = async () =>
    Swal.fire({
      title: "¿Deceas realizar el pago?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete("http://localhost:3001/shoppingCart/successfullyPayment");
        Swal.fire("Tu pago ha sido exitoso!").then(() => {
          if (result.isConfirmed) {
            navigate("/");
          }
        });
      }
    });

  return (
    <>
      <div className="mt-5">
        <h1 className="text-center">Carrito de compras</h1>
        <div className="container">
          <table className="table bg-white text-center">
            <thead>
              <tr>
                <th scope="col">Producto</th>
                <th scope="col">Nombre</th>
                <th scope="col">Precio</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((cartProduct) => (
                <tr key={cartProduct.id}>
                  <td>
                    <img
                      src={cartProduct.imagen}
                      className="imagenCarrito"
                    ></img>
                  </td>
                  <td className="pt-5 h3">{cartProduct.nombre}</td>
                  <td className="pt-5 h3">{cartProduct.precio}</td>
                </tr>
              ))}
            </tbody>
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col" className="h1">
                  Precio Total:
                </th>
                <th scope="col" className="h1">
                  {totalPrice}
                </th>
              </tr>
            </thead>
          </table>
        </div>
        <div>
          <button onClick={swalWithBootstrapButtons}>Pagar</button>
        </div>
      </div>
    </>
  );
};

export default Shoppingcart;
