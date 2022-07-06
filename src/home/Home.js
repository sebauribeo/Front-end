import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <>
    <div className='container  mt-5 mb-5 text-white'>
      <div className='row'>
        <div id="carouselExampleSlidesOnly" class="carousel slide col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 m-0 p-0" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://storage.googleapis.com/liquidos-public/banner_of__julio.jpg" class="d-block w-100" alt="..."></img>
            </div>
            <div class="carousel-item">
              <img src="https://storage.googleapis.com/liquidos-public/despacho_gratis_Pisquera_(1)_(1)_(1).png" class="d-block w-100" alt="..."></img>
            </div>
            <div class="carousel-item">
              <img src="https://storage.googleapis.com/liquidos-public/banner_15_locales.jpg" class="d-block w-100" alt="..."></img>
            </div>
            <div class="carousel-item">
              <img src="https://storage.googleapis.com/liquidos-public/850x550-02_(1).jpg" class="d-block w-100" alt="..."></img>
            </div>
            <div class="carousel-item">
              <img src="https://storage.googleapis.com/liquidos-public/cusquena_stella_actualizado_(1)_(1).jpg" class="d-block w-100" alt="..."></img>
            </div>
            <div class="carousel-item">
              <img src="https://storage.googleapis.com/liquidos-public/MORANDE_VI%C3%91A_DEL_MES_JULIO.jpg" class="d-block w-100" alt="..."></img>
            </div>
          </div>
        </div>
        <div className='col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 mainRight text-center pt-5'>
          <h1 className='my-5'>Liquidos.cl</h1>
          <h4 className='my-5'>Conoce nuestras tiendas</h4>
          <h4 className='my-5'>Ofertas todos los dias</h4>
          <h4 className='my-5'>Descuentos con club Liquidos</h4>
        </div>
      </div>
      <div>
      <img src="https://storage.googleapis.com/liquidos-public/banner_15_locales.jpg" className="w-100" alt="..."></img>
      </div>

    </div>
    </>
  )
}

export default Home