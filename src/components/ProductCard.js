import React from 'react';
import ProductPrice from './ProductPrice';

export default function ProductCard({product}) {
 
  return (
    <div className="mx-auto md:mx-1 flex flex-col border border-oriental-dark rounded max-w-sm shadow-lg">
      <img src={product.image} alt="img" className="w-full"/>
      <div className="text-center flex flex-col flex-1">
        <div className="text-1xl text-oriental-dark font-bold">
          {product.name}
        </div>
        <ProductPrice product={product}/>
      </div>
    </div>
  );
}
