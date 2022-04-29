import React from "react";
import Slider from "react-slick";
import  {ImageCarousel}  from "./styles";


export default function Slick() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
    
    <Slider {...settings}>
      <ImageCarousel>
        <div>
          <img src="https://picsum.photos/300/400" />
        </div>
      </ImageCarousel>
      <ImageCarousel>
        <div>
          <img src="https://picsum.photos/300/400" />
        </div>
      </ImageCarousel>
      <ImageCarousel>
        <div>
          <img src="https://picsum.photos/300/400" />
        </div>
      </ImageCarousel>
      <ImageCarousel>
        <div>
          <img src="https://picsum.photos/300/400" />
        </div>
      </ImageCarousel>
      <ImageCarousel>
        <div>
          <img src="https://picsum.photos/300/400" />
        </div>
      </ImageCarousel>
      <ImageCarousel>
        <div>
          <img src="https://picsum.photos/300/400" />
        </div>
      </ImageCarousel>
    </Slider>
  );
}