import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <>
    <div className='container  mt-5 mb-5'>
      <div className='row'>
        <div id="carouselExampleIndicators" class="carousel slide col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6" data-bs-ride="true">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://storage.googleapis.com/liquidos-public/banner_of__julio.jpg" class="d-block img" alt="..."></img>
            </div>
            <div class="carousel-item">
              <img src="https://storage.googleapis.com/liquidos-public/despacho_gratis_Pisquera_(1)_(1)_(1).png" class="d-block img" alt="..."></img>
            </div>
            <div class="carousel-item">
              <img src="https://storage.googleapis.com/liquidos-public/banner_15_locales.jpg" class="d-block img" alt="..."></img>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div className='col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3'>

        </div>
      </div>

    </div>
    </>
  )
}

export default Home