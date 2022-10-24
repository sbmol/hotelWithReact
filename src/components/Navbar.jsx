import React from 'react'
import Logo from '../images/logo.svg'
import './Navbar.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm bgCustomNav fixed-top">
        <div className="container">
        <img src={Logo} alt="logo" className="img-logo2 d-lg-none" />
                <button className="navbar-toggler  ms-auto border-1 border-white" type="button" data-bs-toggle="collapse" data-bs-target="#n_bar" aria-controls="navbarNavAltMarkup" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon border-white"></span>
                </button>
                <div className="collapse navbar-collapse" id="n_bar">
                    <ul className="navbar-nav mx-auto text-white ">
                        <Link to="/servicios" className="nav-link text-white fw-bold">SERVICIOS</Link>
                        <Link to="/nosotros" className="nav-link text-white fw-bold">NOSOTROS</Link>
                        <img src={Logo} alt="" className='img-logo2 d-none d-lg-block' />
                        <Link to="/contacto" className="nav-link text-white fw-bold">CONTACTO</Link>
                        <Link to="/tarifas" className="nav-link text-white fw-bold">TARIFAS</Link>
                        
                    </ul>
                </div>
            </div>
      </nav>      
    </>
  )
}

export default Navbar