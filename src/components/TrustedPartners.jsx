import React from "react";
import Marquee from "react-fast-marquee";
import img1 from "../img/trusted/1.png";
import img2 from "../img/trusted/2.png";
import img3 from "../img/trusted/3.png";
import img4 from "../img/trusted/4.png";
import img5 from "../img/trusted/5.png";
import img6 from "../img/trusted/6.png";
import img7 from "../img/trusted/7.png";
import img8 from "../img/trusted/8.png";
import img9 from "../img/trusted/9.png";
import img10 from "../img/trusted/10.png";
import img11 from "../img/trusted/11.png";
import img12 from "../img/trusted/12.png";
import img13 from "../img/trusted/13.png";


const TrustedPartners = () => {
  return (
    <div>
      <p className=" text-2xl font-semibold">Trusted Partners</p>
      <div className=" mt-12">
        <Marquee>
            <img src={img1} alt="img1" className=" h-24 ml-6"/>
            <img src={img2} alt="img1" className=" h-24 ml-6"/>
            <img src={img3} alt="img1" className=" h-24 ml-6"/>
            <img src={img4} alt="img1" className=" h-24 ml-6"/>
            <img src={img5} alt="img1" className=" h-24 ml-6"/>
            <img src={img6} alt="img1" className=" h-24 ml-6"/>
            <img src={img7} alt="img1" className=" h-24 ml-6"/>
            <img src={img8} alt="img1" className=" h-24 ml-6"/>
            <img src={img9} alt="img1" className=" h-24 ml-6"/>
            <img src={img10} alt="img1" className=" h-24 ml-6"/>
            <img src={img11} alt="img1" className=" h-24 ml-6"/>
            <img src={img12} alt="img1" className=" h-24 ml-6"/>
            <img src={img13} alt="img1" className=" h-24 ml-6"/>
        </Marquee>
      </div>
    </div>
  );
};

export default TrustedPartners;
