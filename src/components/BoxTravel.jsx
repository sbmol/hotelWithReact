import './BoxTravel.css'
import Perito from '../images/glaciarpmoreno.jpeg'



const BoxTravel = () => {

  const bgStyle = {
    content: {
      backgroundColor: '#F9F3EE',

    }
    
  }
  return (
    <>
    <div className="containe-fluid" style={bgStyle.content}>
      <p className='titleOver lead text-white px-2 py-2 mx-2'>
        CONOCIENDO EL SUR
        
      </p>
      <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img src={Perito} class="d-block mx-lg-auto img-fluid rounded" alt="" width="700" height="500" loading="lazy" />
            
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3">Glaciar Perito Moreno</h1>
            <p class="lead">Veni a conocer el majestuoso graciar Perito Moreno, que se encuentra a tan solo 85 kilometros de la ciudad, cuenta con pasarellas, cuenta con pasarellas, comedor y snack bar.</p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-center">
              <button type="button" class="btn btn-danger btn-lg px-4 me-md-2">COMENZAMOS</button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default BoxTravel