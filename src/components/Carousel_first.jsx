import React from "react";
import Carousel from "react-bootstrap/Carousel";

export const Carousel_first = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="/images/berserk.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="/images/bnh.png"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/hxh.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carousel_first;
