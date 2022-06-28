import React, { useEffect, useState } from "react";
import "../ShoppingCart/ShoppingCart.css";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Shoppingcart = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  console.log(cart);

  useEffect(() => {
    fetch("http://localhost:3001/shoppingCart")
      .then((res) => res.json())
      .then((result) => {
        setCart(result.response);
      });
  }, []);

  const price = cart
    ? cart.map((precio) => precio.precio * precio.cantidad)
    : "";
  const totalPrice = price.length > 0 ? price.reduce((a, b) => a + b) : "";

  const successfullyPayment = async () =>
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
        Swal.fire({
          title: "Tu pago ha sido exitoso!",
          icon: "success",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/");
            window.location.reload();
          }
        });
      }
    });

  const deleteById = async (id) => {
    const body = parseInt(id.target.value);

    Swal.fire({
      title: "¿Estas seguro?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3001/shoppingCart/deleteProduct`, {
          params: {
            id: body,
          },
        });
        Swal.fire({
          title: "Elemento borrado.",
          icon: "success",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          }
        });
      }
    });
  };

  if (!cart) {
    return (
      <>
        <h1>iffff</h1>
      </>
    );
  } else {
    return (
      <>
        <div className="mt-5 text-center">
          <h1 className="text-center">Carrito de compras</h1>
          <div className="container">
            <table className="table bg-white">
              <thead>
                <tr>
                  <th scope="col">
                    <h3 className="bg-warning text-dark rounded-5">
                      Productos
                    </h3>
                  </th>
                  <th scope="col">
                    <h3 className="bg-warning text-dark rounded-5">Nombre</h3>
                  </th>
                  <th scope="col">
                    <h3 className="bg-warning text-dark rounded-5">Cantidad</h3>
                  </th>
                  <th scope="col">
                    <h3 className="bg-warning text-dark rounded-5">Precio</h3>
                  </th>
                  <th scope="col">
                    <h3 className="bg-warning text-dark rounded-5">Eliminar</h3>
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart.map((cartProduct) => (
                  <tr key={cartProduct.id}>
                    <td>
                      <img
                        src={cartProduct.imagen}
                        className="imagenCarrito"
                        alt=""
                      ></img>
                    </td>
                    <td className="pt-5 h3">{cartProduct.nombre}</td>
                    <td className="pt-5 h3">{cartProduct.cantidad}</td>
                    <td className="pt-5 h3">{cartProduct.precio}</td>
                    <td className="pt-5 h3">
                      <button
                        className="btn btn-danger bi bi-trash3-fill trash"
                        onClick={deleteById}
                        value={cartProduct.id}
                      ></button>
                    </td>
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
                    ${totalPrice}
                  </th>
                </tr>
              </thead>
            </table>
          </div>
          <div>
            <button
              className="btn btn-success w-50 m-5 fs-1 rounded-5"
              onClick={successfullyPayment}
            >
              Pagar
            </button>
          </div>
        </div>
      </>
    );
  }
};

export default Shoppingcart;
