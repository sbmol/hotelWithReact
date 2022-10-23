import React from 'react'
import Logo from '../images/logo.svg'
import './Navbar.css'


const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm bgCustomNav fixed-top">
        <div className="container">
        <img src={Logo} alt="logo" className="img-logo2 d-lg-none" />
                <button className="navbar-toggler  ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#n_bar" aria-controls="navbarNavAltMarkup" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="n_bar">
                    <ul className="navbar-nav mx-auto text-white ">
                        <li className="nav-item"><a className="nav-link text-white fw-bold" href="#">SERVICIOS</a></li>
                        <li className="nav-item"><a className="nav-link text-white fw-bold" href="#">TARIFAS</a></li>
                        <img src={Logo} alt="" className='img-logo d-none d-lg-block' />
                        <li className="nav-item"><a className="nav-link text-white fw-bold" href="#">NOSOTROS</a></li>
                        <li className="nav-item"><a className="nav-link text-white fw-bold" href="#">CONTACTO</a></li>
                        
                    </ul>
                </div>
            </div>
      </nav>      
    </>
  )
}

export default Navbar