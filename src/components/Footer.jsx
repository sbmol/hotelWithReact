import React from 'react'
import Logo from '../images/logo.png'

const styles = {
  bg: {
    backgroundColor: '#222831',
  }
}

const Footer = () => {
  
  return (
    <div className='px-5 py-5' style={styles.bg}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            
            <p className='lead text-white'>KOI-MAHIK HOTEL</p>
            <p className='text-start text-white'> <i className="fa-solid fa-road"></i> Capitan Soto 3867, El Calafate, Argentina</p>
            <p className='text-start text-white'> <i className="fa-solid fa-clock"></i> Siempre Abierto</p>
            <p className='text-start text-white'> <i className='fa-solid fa-phone'> + 54 2902 49-6543</i></p>
            

            
          </div>
          <div className="col-md-4 text-white justify-content-center">
            <p className="lead text-center">Seguinos en nuestras redes</p>
            <p className='text-center'>
            <i className="fa-brands fa-facebook fa-2x"></i> &nbsp;
            <i className="fa-brands fa-instagram fa-2x"></i> &nbsp;
            <i className="fa-brands fa-twitter fa-2x"></i> &nbsp;
            </p>
          </div>
          <div className="col-md-4 text-white">
          <img src={Logo} alt=""  style={{
              with: '100px',
              height: '100px',
            }} className="text-start"/>
            
          </div>
        </div>
  
      </div>
    </div>
  )
}

export default Footer