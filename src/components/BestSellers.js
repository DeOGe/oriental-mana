import React, { useEffect, useState } from 'react'
import ProductList from './ProductList';
export default function BestSellers() {
    const [bestSellers, setBestSellers] = useState([])

    const getData=()=>{
        fetch('data/best_sellers.json')
          .then(function(response){
            return response.json();
          })
          .then(function(myJson) {
            setBestSellers(myJson);
          });
      }
      useEffect(()=>{
        getData()
      },[]);

    return (
        <div className='mx-40 my-5 '>
            <h1 className='my-5 text-center'>Best Sellers</h1>
            <ProductList products={bestSellers}/>
        </div>
    )
}
