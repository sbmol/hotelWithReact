import React from 'react'
import Logo from '../images/logo.png'
import './Header.css'



const Header = () => {
  return (
    <div className='container' >
      <div className="header-cs">
      <div className="px-4 py-5 my-5 text-center">
    <img src={Logo} alt=""  style={{
      with: '100px',
      height: '100px',
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    }}/>
    
    <h1 className="display-5 textStyle fw-bolder text-white">HOTEL KOI MAHIK</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4 text-light">Hotel Patagonico con excelente vista al lago a tan solo 10 minutos de la ciudad.</p>
      <p className='lead mb-4 text-light'>Nuestros alojamientos estan disponibles todo el anho.</p>
    </div>
  </div>
      </div>
    </div>
  )
}

export default Header