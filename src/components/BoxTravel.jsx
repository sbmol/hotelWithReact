import './BoxTravel.css'
import hotel from '../images/hotel1.jpeg'



const BoxTravel = () => {

  const bgStyle = {
    content: {
      backgroundColor: '#F9F3EE',

    }
    
  }
  return (
    <>
    <div className="containe-fluid" style={bgStyle.content}>
      
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={hotel} className="d-block mx-lg-auto img-fluid rounded" alt="" width="700" height="500" loading="lazy" />
            
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">Bienvenidos a <span>Hotel Koi Mahik</span></h1>
            <p className="text-muted">El Hotel se encuentra situado a 3.5km del centro de la ciudad y tan solo  4 cuadras de la Costanera de la ciudad, donde puede disfrutar de un paseo por la Costa del Lago Argentino. </p>
            <p className="text-muted">Las habitaciones estan equipadas con bañera, TV Satelital, caja fuerte, y WI FI. Los baños incluyen bañera, y amenidades.</p>
            
          </div>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default BoxTravel