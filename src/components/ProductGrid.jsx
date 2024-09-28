import React from 'react';

const ProductGrid = ({ title, products }) => {

    
  return (
    <div className="product-grid">

      <h2>{title}</h2>

      <div className="product-grid-items">
        
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;
