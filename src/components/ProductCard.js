import React from 'react';
export default function ProductCard({product}) {
 
  return (
    <div className="border border-oriental-dark rounded m-2 max-w-sm overflow-hidden shadow-lg bg-white">
      <img src={product.image} alt="img" className="w-full"/>
      <div className="text-center px-4 py-2">
        <div className="text-md">
          <div className=" text-xs font-bold">
            {product.name}
          </div>
          {/* <div className="text-sm">
              {product.name}
          </div> */}
        </div>
        <div className="sm:text-sm">
          ₱{product.price}
        </div>
      </div>
    </div>
  );
}
