import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <>
    <div className='container  mt-5 mb-5 text-white'>
      <div className='row'>
        <div id="carouselExampleIndicators" className="carousel slide col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 m-0 p-0" data-bs-ride="true">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://storage.googleapis.com/liquidos-public/banner_of__julio.jpg" className="d-block w-100" alt="..."></img>
            </div>
            <div className="carousel-item">
              <img src="https://storage.googleapis.com/liquidos-public/despacho_gratis_Pisquera_(1)_(1)_(1).png" className="d-block w-100" alt="..."></img>
            </div>
            <div className="carousel-item">
              <img src="https://storage.googleapis.com/liquidos-public/banner_15_locales.jpg" className="d-block w-100" alt="..."></img>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className='col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 bg-dark text-center'>
          <h1 className='mt-5'>Liquidos.cl</h1>
          <h4 className='mt-4'>texto texto</h4>
          <h4 className='mt-4'>texto texto</h4>
          <h4 className='mt-4'>texto texto</h4>
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