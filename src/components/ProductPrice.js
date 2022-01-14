import React, { useState } from 'react';
import '../styles/ProductVariant.css';

export default function ProductPrice({product}) {
const [activeVariant, setActiveVariant] = useState(0);
var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'PHP',
});

if (product.variants.length > 0) {
  return (
    <div className=''>
      <div className="text-xl"> 
        <h1>{formatter.format(product.variants[activeVariant].price)}</h1>
      </div>
      <div className="variant-container flex flex-wrap justify-center my-1 text-xs">
        {product.variants.map((variant, index) => {
          return <div
            key={index}
            className={`px-1 m-1 text-center border border-oriental-dark rounded ${index===activeVariant ? 'active' : ''}`}
            onClick={() => {setActiveVariant(index)}}
          >
            {variant.name}
          </div>
        })}
      </div>
    </div>
  );
}
  return (
    <div className='flex-1 flex'>
        <div className="text-xl m-auto">
          {formatter.format(product.price)}
        </div>
    </div>
  );
}
