import React from 'react';
import ProductCard from "./ProductCard";

function ProductList({products}) {
    if (products.length < 1) {
        return (
            <div>
                NO DATA
            </div>
        )
    }
    
    return (
        <div className="container mx-auto px-2">
            <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {
                    products.map((item) => {
                        return  <ProductCard key={item.id} product={item}/>
                    })
                }
        
            </div>
        </div>
    )
    
}

export default ProductList
