import React from 'react'
import Logo from '../images/logo.png'

const styles = {
  bg: {
    backgroundColor: '#F9F3EE',
  }
}

const Footer = () => {
  console.log("Hey there from footer")
  return (
    <div className='px-2 py-2' style={styles.bg}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src={Logo} alt=""  style={{
              with: '100px',
              height: '100px',
            }} className="text-start"/>
            <p className='lead'>KOI-MAHIK HOTEL</p>
            

            
          </div>
          <div className="col-md-4">
            <p className="lead">Seguinos en nuestras redes</p>
            <i className="fa-brands fa-facebook fa-2x"></i> &nbsp;
            <i className="fa-brands fa-instagram fa-2x"></i> &nbsp;
            <i className="fa-brands fa-twitter fa-2x"></i> &nbsp;
          </div>
          <div className="col-md-4">
            <p className='text-start'> <i class="fa-solid fa-road"></i> Capitan Soto 3867, El Calafate, Argentina</p>
            <p className='text-start'> <i className="fa-solid fa-clock"></i> Siempre Abierto</p>
            <p className='text-start'> <i className='fa-solid fa-phone'> + 54 2902 49-6543</i></p>
          </div>
        </div>
  
      </div>
    </div>
  )
}

export default Footer