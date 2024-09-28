import React from 'react';
import Herobanner  from '../assets/Herobanner.jpg'


const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <img src={Herobanner}
        alt="Hero Banner" 
        className="hero-banner-image" 
      />
    </div>
  );
}

export default HeroBanner;
