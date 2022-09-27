import React from 'react'
import Logo from '../images/logo.png'
import './Navbar.css'


const Navbar = () => {
  return (
    <>
      <div className="navbar navbar-expand-sm bgCustom2">
        <ul className='navbar-nav ms-auto'>
          <li className='nav-link text-dark'> 
          <i class="fa-solid fa-envelope"></i> reservas.koimahik@outlook.com.ar </li>
          <li className='nav-link text-dark'><i class="fa-brands fa-whatsapp"></i> + 02902 49-6543 </li>

        </ul>

      </div>
      <nav className="navbar navbar-expand-sm navbar-light bgCustomNav">
        
        <div class="container">
        <img src={Logo} alt="logo" className="img-logo" />
                <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#n_bar" aria-controls="navbarNavAltMarkup" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="n_bar">
                    <ul class="navbar-nav ms-auto text-white">
                        <li class="nav-item"><a class="nav-link text-white fw-bold" href="#">SERVICIOS</a></li>
                        <li class="nav-item"><a class="nav-link text-white fw-bold" href="#">TARIFAS</a></li>
                        <li class="nav-item"><a class="nav-link text-white fw-bold" href="#">NOSOTROS</a></li>
                        <li class="nav-item"><a class="nav-link text-white fw-bold" href="#">CONTACTO</a></li>
                        
                    </ul>
                </div>
            </div>
      </nav>      
    </>
  )
}

export default Navbar