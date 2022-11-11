import React from 'react'
import Breakfast from '../images/breakfast.jpeg'
import Coctail from '../images/wine.jpeg';
import './Prom.css'
import Resto from '../images/coctail.jpeg'


const Prom  = () => {

 
  return (
    <>
      <div className="container text-dark py-2">
        <div className="row">
          <div className="col-md-4 my-2">
            <div className="cardProm">
              <img src={Breakfast} alt="" className='cardProm' />
              <h4 className='text-margin'>Desayuno incluido</h4>
              
            </div>

          </div>
          <div className="col-md-4 my-2">
            <img src={Coctail} alt="" className='cardProm'/>
            <h4 className='text-margin'>Cocktail de bienvenida</h4>
          </div>
          <div className="col-md-4 my-2">
            <img src={Resto} alt="" className='cardProm' />
            <h4 className='text-margin text-center'>Restaurante</h4>

          </div>
        </div>
      </div>
    </>
  )
}

export default Prom