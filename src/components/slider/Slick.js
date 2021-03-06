import React from "react";
import Slider from "react-slick";
import { CardProduct } from "../card/CardProduct";
import { ImageCarousel } from "./styles";


export default function Slick() {
  
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (

    <Slider {...settings}>

      <CardProduct />

      <CardProduct />

      <CardProduct />

      <CardProduct />

      <CardProduct />

      <CardProduct />

      <CardProduct />

      <CardProduct />

      <CardProduct />

      <CardProduct />

      <CardProduct />

      <CardProduct />

    </Slider>

  );

}
