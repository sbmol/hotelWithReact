import React from 'react'
import '../features/Paisajes.css'


const Paisajes = () => {

  const style = {
    bg: {
      backgroundColor: '#F9F3EE',
    }
  }
  return (
   <>
    <div className="container-fluid px-3 py-3" style={style.bg}>
      <div className="container-fluid cs-visit rounded shadow px-5 py-5 text-white">
      <h2 className='fw-bold text-dark'>GLACIAR PERITO MORENO</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa id, doloribus qui harum molestias asperiores voluptatem similique corrupti architecto, placeat nam magni possimus. Magnam dolorum accusamus veritatis sunt eveniet optio.</p>
      

      </div>
    </div>
   </>
  )
}

export default Paisajes