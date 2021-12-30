import React from 'react';
export default function ProductCard({product}) {
 
    return (
        <div className="rounded m-2 max-w-sm overflow-hidden shadow-lg">
            <img src={product.image} alt="img" className="w-full"/>
            <div className="text-center px-4 py-2">
                <div className="text-xl mb-1">
                    <div className="font-bold">
                        {product.name}
                    </div>
                    {/* <div className="text-sm">
                        {product.name}
                    </div> */}
                    
                </div>
                <div className="font-bold">
                    ₱{product.price}
                </div>
                
            </div>
        </div>
    );
}
