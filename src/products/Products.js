import React, { useEffect, useState } from 'react'
import './Products.css'
 const Products = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result.response);
          setIsLoaded(true);
          setItems(result.response);
        },(error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])



  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
      <div className='container'>
        <div className='row'>
          {items.map(item => (
          <div className="card col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 text-center" key={item.id}>
            <img src={item.imagen} className="card-img-top imagen" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">{item.nombre}</h5>
              <p className="card-text">{item.marca}</p>
              <p className="card-text">{item.detalle}</p>
              <h4 className="card-text">$ {item.precio}</h4>
              <a className="btn btn-primary">Agregar al carrito</a>
            </div>
          </div>
          ),
          )}

        </div>
      </div>
      </>

    );
  }
}

export default Products