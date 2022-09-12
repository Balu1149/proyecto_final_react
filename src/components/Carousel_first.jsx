import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export const Carousel_first = () => {
  return (
    <div><Carousel>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100"
        src='/images/products-01.jpg'
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img
        className="d-block w-100"
        src='/images/products-02.jpg'
        alt="Second slide"
      />

    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src='/images/products-03.jpg'
        alt="Third slide"
      />

    </Carousel.Item>
  </Carousel></div>
  )
}

export default Carousel_first