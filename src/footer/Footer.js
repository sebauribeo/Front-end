import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='container text-white'>
            <div className='row'>
                <div className='col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mt-3'>
                    <img src="https://storage.googleapis.com/liquidos-public/logo-footer_11zon.webp" className="logoFooter" alt="..."></img>
                </div>
                <div className='col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mt-3'>
                    <h2>Mesa de ayuda</h2>
                    <p>Horario de atención: Lunes a Viernes de 09:00 a 18:00 hrs.</p>
                    <p>Correo:hola@liquidos.cl</p>
                    <p>Comercial Liquidos Off SPA</p>
                </div>
                <div className='col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mt-3'>
                    <h2>Casa Matriz</h2>
                    <p>Holanda 099, Piso 3, Providencia</p>
                    <br></br>
                    <h2>Nuestras R.R.S.S.</h2>
                    <ul className='rrss'>
                        <li><i className="bi bi-instagram"></i></li>
                        <li><i className="bi bi-meta"></i></li>
                        <li><i className="bi bi-twitter"></i></li>
                    </ul>

                </div>
                <div className='col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mt-3'>
                    <img src="https://storage.googleapis.com/liquidos-public/webpay-plus_11zon.webp" className="logoWebPay" alt="..."></img>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer