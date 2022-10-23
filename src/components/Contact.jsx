import React from 'react'
import emailjs from 'emailjs-com'
import { useRef } from 'react'
import './Contact.css'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_aeurhma', 'template_i2e2gf9', form.current, 'i7I0SecDmHlSyUr68')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  
  return (
    <>
      <div className="container-fluid px-5 py-5 bgContact">
        <div className="row">
          
          <div className="col-md-6">
          <form ref={form} onSubmit={sendEmail}>
            {/* <!-- name --> */}
            <div className="form-group">
              <label for="name" className=" align-content-end">Nombre</label>
              <input
                type="name"
                name="name"
                className="form-control"
                id="name"
                placeholder="Ingrese su nombre"
              />
            </div>

            {/* <!-- email --> */}
            <div className="form-group">
              <label for="email">Email:</label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                placeholder="Ingrese su consulta"
              />
            </div>

            {/* <!-- subject --> */}
            <div className="form-group">
              <label for="subject">Asunto</label>
              <input
                type="text"
                name="subject"
                className="form-control"
                id="subject"
                placeholder="Ingrese los datos para la reserva"
              />
            </div>

            <div className="form-group">
              <label for="email_body">Mensaje</label>
              <textarea
                className="form-control"
                id="email_body"
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-danger my-2">
              Submit
            </button>
          </form>
          </div>
        </div>
      </div>
      

    </>
  )
}

export default Contact