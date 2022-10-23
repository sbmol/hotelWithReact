import React from 'react'
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import LightGallery  from 'lightgallery/react';
import Images1 from '../images/hotel/56895332.jpeg';



const Gallery = () => {
  const stylesSize = {
    img: {
      width: '100px',
      heigh: '100px'
    }
  }

  const onInit = () => {
    console.log('gallery working 100% mr stark');
  }
  return (
    <div>
      <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
        <a href="" styles={stylesSize.img} className="img-fluid"/>
          <img src={Images1} alt="" className='img-fluid'/>

      </LightGallery>

    </div>
  )
}

export default Gallery