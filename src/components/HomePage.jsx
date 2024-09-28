import React from 'react';
import Navbar from './Navbar';
import HeroBanner from './HeroBanner';
import ProductGrid from './ProductGrid';
import aircon  from '../assets/aircon.jpg'
import boat  from '../assets/boat.jpg'
import boult  from '../assets/boult.jpg'
import fridge  from '../assets/fridge.jpg'
import microwaves  from '../assets/microwaves.jpg'
import noise  from '../assets/noise.jpg'
import washingmac  from '../assets/washingmac.jpg'
import zeb  from '../assets/zeb.jpg'
import cusion  from '../assets/cusion.jpg'
import fig  from '../assets/fig.jpg'

import lightsource  from '../assets/lightsource.jpg'

import Subnav from  './Subnav';

import './Navbar'
import Oapp from './Oapp'
import Footer from './Footer'



const HomePage = () => {
  const headphones = [
    { image: boat, name: 'boAt', price: 'Starting ₹249' },
    { image: boult, name: 'Boult', price: 'Starting ₹349' },
    { image: noise, name: 'Noise', price: 'Starting ₹649' },
    { image: zeb, name: 'Zebronics', price: 'Starting ₹149' },
  ];

  const appliances = [
    { image: aircon, name: 'Air Conditioners', price: 'Up to 55% off' },
    { image: fridge, name: 'Refrigerators', price: 'Up to 55% off' },
    { image: microwaves, name: 'Microwaves', price: 'Up to 55% off' },
    { image:  washingmac, name: 'Washing Machines', price: 'Up to 55% off' },
  ];

  const homeDecor = [
    { image: cusion, name: 'Cushion Covers', price: 'Revamp your home' },
    { image: fig, name: 'Vases', price: 'Revamp your home' },
    { image: lightsource, name: 'Lighting Solutions', price: 'Revamp your home' },
  ];

  const amazonBrands = [
    { image: 'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,w_1460/https://storage.googleapis.com/gen-atmedia/2/2014/12/11639ff49f21f60dea7976c5868c9d98cb361099.jpeg', name: 'Storage & Organization', price: 'Starting ₹299' },
    { image: 'https://th.bing.com/th/id/OIP.eKQHnWcQuCzWqYQ-kfrlXwHaKq?rs=1&pid=ImgDetMain', name: 'Jackets & More', price: 'Up to 60% off' },
    { image: 'https://i5.walmartimages.com/asr/e63bbad1-9807-4d8f-a4b8-1bf73d370191.ebcc0e5d26a0d3d9e745529ed9e15f58.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff', name: 'Toys & Games', price: 'Starting ₹99' },
  ];

  const amazonBrands1 = [
    { image: 'https://images-eu.ssl-images-amazon.com/images/G/31/img24/PB/Jupiter24/PC_QC_Jup-24_186X116-28._SY116_CB562552179_.jpg', name: 'Min. 55% off | Furniture', price: 'Starting ₹499' },
    { image: 'https://images-eu.ssl-images-amazon.com/images/G/31/img24/PB/Jupiter24/PC_QC_Jup-24_186X116-40._SY116_CB562552179_.jpg', name: 'Min. 60% off | Racks & holders', price: 'Up to 60% off' },
    { image: 'https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_Jup-24_186X116-20._SY116_CB562140524_.jpg', name: 'Starting ₹99 | Toys & games', price: 'Starting ₹99' },
  ];
   
  const amazonBrands2 = [
    { image: 'https://images-eu.ssl-images-amazon.com/images/G/31/OHL/Jup24/GW/PC_QC_5_1x._SY116_CB562243010_.jpg', name: 'Sports & fitness', price: '' },
    { image: 'https://images-eu.ssl-images-amazon.com/images/G/31/OHL/Jup24/GW/PC_QC_6_1x._SY116_CB562243010_.jpg', name: 'Automotive', price: '' },
    { image: 'https://images-eu.ssl-images-amazon.com/images/G/31/OHL/Jup24/GW/PC_QC_7_1x._SY116_CB562243010_.jpg', name: 'Garden & outdoor', price: '' },
  ];
 
  return (
    <>
    <Navbar />
    <Subnav />
    <HeroBanner />
    <div className='head-app-main'>
      
     
      <ProductGrid title="Starting ₹149 | Headphones" products={headphones} />
      <ProductGrid title="Appliances for your home | Up to 55% off" products={appliances} />
      <ProductGrid title="Minimum 60% off | Deals on Amazon brands & more" products={amazonBrands1} />
      
    </div>
    <div className='head-app-main1'>
    <ProductGrid title="Revamp your home in style" products={homeDecor} />
    <ProductGrid title="Starting ₹99 | Amazon Brands & more" products={amazonBrands} /> 
    <ProductGrid title="Minimum 50% off | Sports, outdoor & more" products={amazonBrands2} />

    </div>
    
     <Oapp /> 
     <Footer />
    </>
  );
}

export default HomePage;
