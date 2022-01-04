import React, { useState, useEffect, useRef }from 'react'
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";
import '../styles/Carousel.css'

const featuredProducts = [
  "/images/promo_1.png",
  "/images/promo_2.jpg",
  "/images/promo_3.png",
]

export default function Promotions() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const slideRef = useRef();

  let count = 0;
  let slideInterval;
  const handleOnNextClick = () => {
    count = (count + 1) % featuredProducts.length;
    setCurrentIndex(count);
  };

  const handleOnPrevClick = () => {
    const productsLength = featuredProducts.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
  };

  useEffect(() => {
    startSlider();
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    return () => {
        clearInterval(slideInterval);
    };
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 5000);
  };

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  return (
    <div className="w-screen my-4 text-center">
      <h1 className='my-2 text-center text-3xl font-bold'>Promotions</h1>
      <div className="p-2 mx-auto max-w-screen-lg relative select-none">
        <div ref={slideRef} className="aspect-w-5 aspect-h-2">
          <img  src={featuredProducts[currentIndex]} alt="" /> 
        </div>
        <div className='absolute w-full top-1/2 transform -translate-y-1/2 px-3  flex justify-between items-cetner'>
          <button 
            onClick={handleOnPrevClick}
            className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          >
            <AiOutlineVerticalRight size={20} />
          </button>
          <button 
            className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
            onClick={handleOnPrevClick}
            >
              <AiOutlineVerticalLeft size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
