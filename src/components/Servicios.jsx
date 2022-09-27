import React from 'react'
import './Servicios.css'




const Servicios = () => {


  return (
    <div className='rounded-corner servicesBg py-5 px-2 fontCs'>
      <div className="container rounded customDark px-4 py-3">
        <h2 className="display-5 text-white fontCs fw-bolder">Nuestros servicios</h2>
      <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
      <div className="d-flex flex-column align-items-start gap-2">
        <h3 className="fw-bold text-white fontCs fw-bolder">Left-aligned title explaining these awesome features</h3>
        <p className="text-white fontCs fw-bold ">Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
        
      </div>
      <div className="row row-cols-1 row-cols-sm-2 g-4">
        <div className="d-flex flex-column gap-2">
          <div
            className="feature-icon-small d-inline-flex align-items-center justify-content-center  fs-4 rounded-3">
            {/* <svg className="bi" width="1em" height="1em">
              <use xlink:href="#collection" />
            </svg> */}
            <i className="fa-solid fa-bed text-white fa-2x"></i>
          </div>
          <h4 className="fw-semibold mb-0 text-white">Featured title</h4>
          <p className="text-white">Paragraph of text beneath the heading to explain the heading.</p>
        </div>

        <div className="d-flex flex-column gap-2">
          <div
            className="feature-icon-small d-inline-flex align-items-center justify-content-center  fs-4 rounded-3">
            {/* <svg className="bi" width="1em" height="1em">
              <use xlink:href="#gear-fill" />
            </svg> */}
            <i className="fa-solid fa-square-parking text-white fa-2x"></i>
          </div>
          <h4 className="fw-semibold mb-0 text-white">Featured title</h4>
          <p className="text-white">Paragraph of text beneath the heading to explain the heading.</p>
        </div>

        <div className="d-flex flex-column gap-2 text-white">
          <div
            className="feature-icon-small d-inline-flex align-items-center justify-content-center  fs-4 rounded-3">
            {/* <svg className="bi" width="1em" height="1em">
              <use xlink:href="#speedometer" />
            </svg> */}
            <i className="fa-solid fa-bread-slice text-white fa-2x"></i>
          </div>
          <h4 className="fw-semibold mb-0 text-white">Featured title</h4>
          <p className="text-white">Paragraph of text beneath the heading to explain the heading.</p>
        </div>

        <div className="d-flex flex-column gap-2 text-white">
          <div
            className="feature-icon-small d-inline-flex align-items-center justify-content-center  fs-4 rounded-3">
            {/* <svg className="bi" width="1em" height="1em">
              <use xlink:href="#table" />
            </svg> */}
           <i class="fa-solid fa-bell-concierge text-white fa-2x"></i>
          </div>
          <h4 className="fw-semibold mb-0 text-white">Featured title</h4>
          <p className="text-white">Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
    </div>
    </div>
   
    </div>
    
  )
}

export default Servicios