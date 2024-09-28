import React from 'react';
import ProductCard from './ProductCard';


const App = () => {
  return (
    <div className="product-list">
      <ProductCard
        name="Apple iPhone 13 (128GB) - Blue"
        image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6443/6443399_sd.jpg"
        price={69999}
        oldPrice={79999}
        offer="₹10,000 off"
        rating={4}
        delivery="FREE delivery: Sep 28 - Sep 30"
      />
      <ProductCard
        name="Samsung-M32"
        image="https://ampro.in/wp-content/uploads/2023/04/Samsung-M32-Black-Front-View.jpg"
        price={15999}
        oldPrice={17999}
        offer="11% off"
        rating={3}
        delivery="FREE delivery: Sep 28 - Sep 30"
      />
      <ProductCard
        name="OnePlus Nord CE 2 Lite 5G"
        image="https://m.media-amazon.com/images/I/71V--WZVUIL._SL1500_.jpg"
        price={18999}
        oldPrice={20999}
        offer="₹2,000 off"
        rating={5}
        delivery="FREE delivery: Sep 28 - Sep 30"
      />
        <ProductCard
        name="realme NARZO N61 (Voyage Blue,6GB RAM+128GB Storage)"
        image="https://m.media-amazon.com/images/I/71r0Ysx+oVL._SL1500_.jpg"
        price={8498}
        oldPrice={10999}
        offer="₹2,000 off"
        rating={5}
        delivery="FREE delivery: Sep 28 - Sep 30"
      />
    </div>
  );
};

export default App;
