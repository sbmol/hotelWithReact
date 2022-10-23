import React from 'react'
import './Gallery.css'
import { ImageViewer } from 'react-image-viewer-dv';
import hotel1 from '../images/hotel/56895332.jpeg';
import Hotels from '../images/hotel/82605351.jpeg';

const Gallery = () => {
  
  const style = {
    width: '500px',
    height: '500px',
  }

  
  return (
    <div>
      <div className="container-fluid bg-dark">
        <ImageViewer style={style}>
          <img src={hotel1} alt="" className="img-fluid" style={{
            width: '500px', height: '500px'
          }}/>
          <img src={Hotels} alt="" className="img-fluid" style={{
            width: '500px', height: '500px, padding-left: 20px'
          }}/>
        </ImageViewer>



      </div>
    </div>
  )
}

export default Gallery