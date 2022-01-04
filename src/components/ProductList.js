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
        <div className="container mx-auto">
            <div className="grid grid-cols-4">
                {
                    products.map((item) => {
                        // return <pre key={item.id}>{JSON.stringify(item)}</pre>
                        return  <ProductCard key={item.id} product={item}/>
                    })
                }
                
            </div>
        </div>
    )
    
}

export default ProductList
