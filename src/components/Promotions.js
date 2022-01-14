import React, { useEffect, useState } from 'react'
import Slider from './Slider';

export default function Promotions() {
  const [promotions, setPromotions] = useState([])

    const getData=()=>{
        fetch('data/promotions.json')
          .then(function(response){
            return response.json();
          })
          .then(function(myJson) {
            setPromotions(myJson);
          });
      }
      useEffect(()=>{
        getData()
      },[]);
  return (
    <div>
      <Slider images={promotions}/>   
    </div>
  )
}
