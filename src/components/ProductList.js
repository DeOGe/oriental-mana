import React from 'react';
import ProductCard from "./ProductCard";

function ProductList({products}) {
    console.log(products)
    if (products.length < 1) {
        return (
            <div>
                NO DATA
            </div>
        )
    }
    
    return (
        <div className="container mx-auto">
            <div className="md:grid grid-cols-3">
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
