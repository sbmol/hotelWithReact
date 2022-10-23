
import './App.css';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import BoxTravel from './components/BoxTravel';
import Prom from './components/Prom';
import Img from '../src/images/167926359.jpeg';
import Coctail from '../src/images/coctail.jpeg';
import bed from '../src/images/bed1.jpeg';
import logoPre from '../src/images/logo_pre_viaje.png';





function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Img} alt="img" className="img-fluid w-100 h-50"/>

          
        </div>
        <div className="carousel-item">
          <img src={Coctail} alt="img" className="img-fluid w-100 h-50"/>
          
        </div>
        <div className="carousel-item">
          <img src={bed} alt="img" className="img-fluid w-100 h-50"/>
          
        </div>
      </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
    {/* <div className="logoPre">
        <img src={logoPre} alt="logo"/>
    </div>  esto queda pendiente para lo ultimo*/}
      </div>
  
  
      <BoxTravel />
      <Prom />
      <Footer />
      <a
        href="https://wa.me/2348100000000"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
      
    </div>
  );
}

export default App;
