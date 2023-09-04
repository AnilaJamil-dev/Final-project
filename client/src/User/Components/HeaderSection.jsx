import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export default function HeaderSection() {
  return (
    <div className="container-fluid">
    <Carousel data-bs-theme="secondary">
      <Carousel.Item interval={1000}>
        <div className='container-fluid'>
        <img className='img-fluid' 
          src='https://royalwrist.pk/wp-content/uploads/2023/08/MK-Watch-Slider-1.jpg'
          alt="First slide"
        />
 </div>
      </Carousel.Item>

      <Carousel.Item interval={500}>
      <div className='container-fluid'>
        <img className='img-fluid' 
      
          src="https://royalwrist.pk/wp-content/uploads/2022/09/Fossil2.jpg"
          alt="Second slide"
        />
 </div>

     
      </Carousel.Item>
      <Carousel.Item>
      <div className='container-fluid '>
        <img className='img-fluid' 
      
          src="https://royalwrist.pk/wp-content/uploads/2022/09/Man-Of-Tomorrow.jpg"
          alt="Third slide"
        />
 </div>

      </Carousel.Item>
      <Carousel.Item>
      <div className='container-fluid'>
        <img className='img-fluid' 
          src="https://royalwrist.pk/wp-content/uploads/2022/09/Gucci-1.jpg"
          alt="Fourth slide"
        />
 </div>

      </Carousel.Item>
    </Carousel>
    </div>
  );
}

