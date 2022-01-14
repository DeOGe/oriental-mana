import React, { useState, useEffect } from 'react'
import ProductList from '../components/ProductList'

export default function Products() {
    const [bestSellers, setBestSellers] = useState([])

    const getData=()=>{
        fetch('data/products.json')
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
        <div className='mx-4 my-12'>
            <h1 className='my-4 text-oriental-dark text-center text-3xl font-bold'>Products</h1>
            <ProductList products={bestSellers}/>
        </div>
    )
}
