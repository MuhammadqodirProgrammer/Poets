// import React from 'react'

// const Probacorusel = () => {
//   return (
//     <div>
//        <div className="corusel_sliks-container slick-div">
//                     <div className="corusel_slik-div corusel_bg1">
//                         <h3>Compact cars</h3>
//                         <p>Rent cars as you are comfortable and where you are comfortable. </p>
//                         <div className="hero_bg-line"></div>
//                     </div>
//                     <div className="corusel_slik-div corusel_bg2">
//                         <h3>Sports cars</h3>
//                         <p>Rent cars as you are comfortable and where you are comfortable.</p>
//                         <div className="hero_bg-line"></div>
//                     </div>
//                     <div className="corusel_slik-div corusel_bg3">
//                         <h3>Vans </h3>
//                         <p>Rent cars as you are comfortable and where you are comfortable.</p>
//                         <div className="hero_bg-line"></div>
//                     </div>
//                 </div>
//     </div>
//   )
// }

// export default Probacorusel


import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
        <div className="corusel_slik-div corusel_bg1">
                        <h3>Compact cars</h3>
                        <p>Rent cars as you are comfortable and where you are comfortable. </p>
                        <div className="hero_bg-line"></div>
                    </div>
                    <div className="corusel_slik-div corusel_bg2">
                        <h3>Sports cars</h3>
                        <p>Rent cars as you are comfortable and where you are comfortable.</p>
                        <div className="hero_bg-line"></div>
                    </div>
                    <div className="corusel_slik-div corusel_bg3">
                        <h3>Vans </h3>
                        <p>Rent cars as you are comfortable and where you are comfortable.</p>
                        <div className="hero_bg-line"></div>
                    </div>
        </Slider>
      </div>
    );
  }
}